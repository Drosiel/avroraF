import { Form, Formik } from "formik";
import { FC } from "react";
import InputComponent from "../../../../shared/ui/input";
import { fetchRegistration } from "../../../../services/auth/auth";
import Button from "../../../../shared/ui/button";

const UserRegistrationForm: FC<any> = ({ isRegistration }) => {
  const handleSubmit = (values: any) => {
    fetchRegistration(values).then((data) => isRegistration(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
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
            <div className="flex flex-col gap-8">
              <div className="grid gap-2">
                <InputComponent
                  label="Почта"
                  name="email"
                  type="email"
                  value={values.email}
                  handleChange={handleChange}
                />

                <InputComponent
                  label="Имя"
                  name="name"
                  type="text"
                  value={values.name}
                  handleChange={handleChange}
                />

                <InputComponent
                  label="Пароль"
                  name="password"
                  type="password"
                  value={values.password}
                  handleChange={handleChange}
                />
              </div>

              <Button text="Зарегистрироваться" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserRegistrationForm;
