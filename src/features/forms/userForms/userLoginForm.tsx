import { Form, Formik } from "formik";
import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../../components/input/input";
import { fetchLogin } from "../../../services/auth/auth";

const UserLoginForm: FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);

  const handleSubmit = (values: any) => {
    fetchLogin(values).then((data) => setValue(data));
  };

  useEffect(() => {
    if (value) {
      navigate("/");
    }
  }, [value, navigate]);

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
              <button type="submit">Войти</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserLoginForm;
