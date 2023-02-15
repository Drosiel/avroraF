import { FC, HTMLInputTypeAttribute } from "react";

interface IInputComponent {
  label?: string;
  name: string;
  value: any;
  type: HTMLInputTypeAttribute;
  handleChange: any;
  onKeyDown?: any;
}

const InputComponent: FC<IInputComponent> = ({
  label,
  name,
  value,
  type,
  handleChange,
  onKeyDown,
}) => {
  return (
    <div className="flex flex-col">
      {label && <span className="text-lg text-[#FA7A02]">{label}</span>}

      <input
        className="bg-[#29292E] focus:outline-none px-3 py-2 rounded text-[#FFFFFF]"
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default InputComponent;
