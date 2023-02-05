import { Form, Formik } from "formik";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputComponent from "../../../../shared/ui/input";
import { RootState } from "../../../../redux/store";
import { fetchUserEdit } from "../../../../services/user/user";
import Button from "../../../../shared/ui/button";
import { addUserData } from "../../../../redux/slices/user/userSlice";
import ImageLoader from "../../../../shared/ui/imageLoader";
import { fetchRemoveImage } from "../../../../services/uploadcare/uploadcare";

const UserEditForm: FC = () => {
  const user = useSelector((state: RootState) => state.user.data);
  const dispatch = useDispatch();

  const [logoId, setLogoId] = useState(null);
  const [value, setValue] = useState<any>("");

  const handleSubmit = (values: {
    name: string;
    id: string | null;
    logo: string | null;
  }) => {
    values.id = user.id;
    values.logo = logoId ? logoId : user.logo;

    if (logoId !== user.logo && user.logo) {
      fetchRemoveImage(user.logo);
    }

    fetchUserEdit(values).then((data) => dispatch(addUserData(data)));
    setValue(null);
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          name: user.name,
        }}
        onSubmit={(values: any) => {
          handleSubmit(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ values, handleChange }) => (
          <Form noValidate>
            <div className="flex flex-col gap-4">
              <InputComponent
                label="имя"
                name="name"
                type="text"
                value={values.name}
                handleChange={handleChange}
              />

              <ImageLoader
                onChange={(e: any) => setLogoId(e.uuid)}
                value={value}
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
