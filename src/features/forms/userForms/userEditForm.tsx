import { Form, Formik } from "formik";
import { FC } from "react";
import InputComponent from "../../../components/input/input";
import { fetchUserEdit } from "../../../services/user/user";

const UserEditForm: FC = () => {
  const handleSubmit = (values: any) => {
    fetchUserEdit(values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: null,
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
              <button type="submit">Изменить</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserEditForm;
