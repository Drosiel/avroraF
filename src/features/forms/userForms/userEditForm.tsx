import { Form, Formik } from "formik";
import { FC } from "react";

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
              имя:
              <input
                className="border-solid border-cyan-400 border-2 mb-2"
                type="text"
                value={values.name}
                onChange={handleChange}
                name="name"
              />
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
              <button type="submit">Изменить</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserEditForm;
