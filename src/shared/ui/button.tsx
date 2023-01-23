import { FC } from "react";

interface IButton {
  text: string;
  typeButton?: "ok" | "secondary" | "primary" | "cancel";
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (value: any) => any;
}

const Button: FC<IButton> = ({
  text,
  typeButton = "primary",
  type = "button",
  onClick,
}) => {
  const setTypeButton = () => {
    switch (typeButton) {
      case "ok":
        return "bg-green-400";

      case "secondary":
        return "bg-blue-400";

      case "primary":
        return "bg-orange-400";

      case "cancel":
        return "bg-red-400";

      default:
        return "bg-grey-400";
    }
  };

  return (
    <button
      className={`rounded px-2 py-2 ${setTypeButton()}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
