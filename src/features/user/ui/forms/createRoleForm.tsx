import { Form, Formik } from "formik";
import { FC } from "react";

import InputComponent from "../../../../shared/ui/input";
import { IRole } from "../../lib/constant";
import Button from "../../../../shared/ui/button";
import { fetchCreateRole } from "../../../../services/user/user";

const CreateRoleForm: FC = () => {
  const handleSubmit = (values: IRole) => {
    fetchCreateRole(values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
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

            <Button text="Создать роль" type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateRoleForm;
