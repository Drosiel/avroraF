import { Form, Formik } from "formik";
import { FC } from "react";
import { fetchRegistration } from "../../../services/auth/auth";

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
              почта:
              <input
                className="border-solid border-cyan-400 border-2 mb-2"
                type="email"
                value={values.email}
                onChange={handleChange}
                name="email"
              />
              пароль:
              <input
                className="border-solid border-cyan-400 border-2 mb-2"
                type="password"
                value={values.password}
                onChange={handleChange}
                name="password"
              />
              <button type="submit">Зарегистрироваться</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserRegistrationForm;
