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
        return "bg-[#405614] border-[#9EE800] hover:bg-[#9EE800d3]";

      case "secondary":
        return "bg-[#29292E] border-[#ffffff] hover:bg-[#ffffffd3]";

      case "primary":
        return "bg-[#673F1D] border-[#FA7A02] hover:bg-[#FA7A02d3]";

      case "cancel":
        return "bg-[#622311] border-[#FF3D00] hover:bg-[#FF3D00d3]";

      default:
        return "bg-grey-400";
    }
  };

  return (
    <button
      className={`rounded uppercase px-4 py-2 border-2 ${setTypeButton()} w-full`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
