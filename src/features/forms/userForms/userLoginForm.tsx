import { Form, Formik } from "formik";
import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
              <button type="submit">Войти</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserLoginForm;
