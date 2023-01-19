import { Form, Formik } from "formik";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputComponent from "../../../../shared/ui/input";
import { RootState } from "../../../../redux/store";
import { fetchUserEdit } from "../../../../services/user/user";
import Button from "../../../../shared/ui/button";
import { getCookie } from "../../../../services/cookies";
import { IToken } from "../../../auth/lib/constant";
import { addUserData } from "../../../../redux/slices/user/userSlice";

const UserEditForm: FC = () => {
  const user = useSelector((state: RootState) => state.user.data);
  const dispatch = useDispatch();

  const value = `; ${document.cookie}`;
  const token: any = getCookie("token", value);

  const handleSubmit = (values: {
    name: string;
    email: string | null;
    token: IToken;
  }) => {
    values.email = user.email;
    values.token = token;

    fetchUserEdit(values).then((data) => dispatch(addUserData(data)));
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: null,
          email: null,
        }}
        onSubmit={(values: any) => {
          handleSubmit(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ values, handleChange }) => (
          <Form noValidate>
            <div className="flex flex-col">
              <InputComponent
                label="имя"
                name="name"
                type="text"
                value={values.name}
                handleChange={handleChange}
              />

              <Button text="Изменить" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserEditForm;
