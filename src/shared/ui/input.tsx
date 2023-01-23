import { FC, HTMLInputTypeAttribute } from "react";

interface IInputComponent {
  label: string;
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
      <span className="text-lg text-red-400">{label}</span>

      <input
        className="border-solid border-red-400 border-2 px-3 py-2 rounded-md"
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

export default InputComponent;
