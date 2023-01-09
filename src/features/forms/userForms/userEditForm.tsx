import { Form, Formik } from "formik";
import { FC } from "react";
import InputComponent from "../../../components/input/input";

const UserEditForm: FC = () => {
  const handleSubmit = (values: any) => {
    console.log("111");
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
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
              <InputComponent
                label="почта"
                name="email"
                type="email"
                value={values.email}
                handleChange={handleChange}
              />
              <InputComponent
                label="пароль"
                name="password"
                type="password"
                value={values.password}
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
