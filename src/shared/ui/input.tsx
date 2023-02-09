import { FC, HTMLInputTypeAttribute } from "react";

interface IInputComponent {
  label?: string;
  name: string;
  value: any;
  type: HTMLInputTypeAttribute;
  handleChange: any;
}

const InputComponent: FC<IInputComponent> = ({
  label,
  name,
  value,
  type,
  handleChange,
}) => {
  return (
    <div className="flex flex-col">
      {label && <span className="text-lg text-red-400">{label}</span>}

      <input
        className="bg-[#29292E] focus:outline-none px-3 py-2 rounded text-[#FFFFFF]"
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

export default InputComponent;
