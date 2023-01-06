import { FC, useState } from "react";
import UserLoginForm from "../features/forms/userForms/userLoginForm";
import UserRegistrationForm from "../features/forms/userForms/userRegistrationForm";

const LoginPage: FC = () => {
  const [value, setValue] = useState(true);

  return (
    <div className="px-2 py-2 flex flex-col gap-4 w-96">
      <div>{value ? <UserRegistrationForm /> : <UserLoginForm />}</div>

      <div>
        <button
          className="bg-gray-800 text-slate-200 font-medium text-xl px-4 py-4 rounded-lg"
          onClick={() => setValue(!value)}
        >
          {value ? "Вход" : "Регистрация"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
