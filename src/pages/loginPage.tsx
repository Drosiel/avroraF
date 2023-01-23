import { FC, useState } from "react";
import UserLoginForm from "../features/user/ui/forms/userLoginForm";
import UserRegistrationForm from "../features/user/ui/forms/userRegistrationForm";
import Button from "../shared/ui/button";

const LoginPage: FC = () => {
  const [value, setValue] = useState(true);

  return (
    <div className="flex justify-center py-6">
      <div className="flex flex-col w-96 gap-4">
        <div>{value ? <UserRegistrationForm /> : <UserLoginForm />}</div>

        <Button
          typeButton="secondary"
          text={value ? "Войти" : "Регистрация"}
          onClick={() => setValue(!value)}
        />
      </div>
    </div>
  );
};

export default LoginPage;
