import { Form, Formik } from "formik";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputComponent from "../../../../shared/ui/input";
import { RootState } from "../../../../redux/store";
import { fetchCreateTeam } from "../../../../services/team/team";
import { ITeam } from "../../lib/constant";
import Button from "../../../../shared/ui/button";
import { addTeamForUser } from "../../../../redux/slices/user/userSlice";

const CreateTeamForm: FC<any> = ({ onClose }: any) => {
  const user = useSelector((state: RootState) => state.user.data);
  const dispatch = useDispatch();

  const handleSubmit = (values: ITeam) => {
    fetchCreateTeam(values).then(
      (data) => dispatch(addTeamForUser(data)),
      onClose(false)
    );
  };

  useEffect(() => {}, [user.id]);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: "",
        creatorId: user.id,
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
              label="Название"
              name="name"
              type="text"
              value={values.name}
              handleChange={handleChange}
            />

            <Button text="Создать команду" type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateTeamForm;
