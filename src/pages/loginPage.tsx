import { FC, useState } from "react";
import UserLoginForm from "../features/user/ui/forms/userLoginForm";
import UserRegistrationForm from "../features/user/ui/forms/userRegistrationForm";

const LoginPage: FC = () => {
  const [value, setValue] = useState(false);

  return (
    <div className="flex justify-center py-6">
      <div className="flex flex-col w-96 gap-4">
        <div>
          {value ? (
            <UserRegistrationForm isRegistration={setValue} />
          ) : (
            <UserLoginForm />
          )}
        </div>

        {!value && (
          <div className="whitespace-nowrap">
            У вас нет аккаунта?{" "}
            <button
              type="button"
              className="inline text-[#FA7A02] cursor-pointer"
              onClick={() => setValue(true)}
            >
              Зарегистрироваться
            </button>
          </div>
        )}

        {value && (
          <div className="whitespace-nowrap">
            У вас есть аккаунт?{" "}
            <button
              type="button"
              className="inline text-[#FA7A02] cursor-pointer"
              onClick={() => setValue(false)}
            >
              Войти
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
