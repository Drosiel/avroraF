import { Form, Formik } from "formik";
import { FC } from "react";
import InputComponent from "../../../../shared/ui/input";
import { fetchRegistration } from "../../../../services/auth/auth";
import Button from "../../../../shared/ui/button";

const UserRegistrationForm: FC = () => {
  const handleSubmit = (values: any) => {
    fetchRegistration(values);
  };
  return (
    <div>
      <Formik
        initialValues={{
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

              <Button text="Зарегистрироваться" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserRegistrationForm;
