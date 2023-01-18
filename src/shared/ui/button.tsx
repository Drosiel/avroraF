import { FC } from "react";

interface IButton {
  text: string;
  isSecondary?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (value: any) => any;
}

const Button: FC<IButton> = ({
  text,
  isSecondary = false,
  type = "button",
  onClick,
}) => {
  return (
    <button
      className={`rounded px-2 py-2 ${
        isSecondary
          ? "bg-teal-600 hover:bg-teal-400"
          : "bg-orange-600 hover:bg-orange-400"
      }`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
