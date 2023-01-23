import { FC } from "react";

interface ISelect {
  name: string;
  options: any;
  onChange?: (value: any) => any;
}

const Select: FC<ISelect> = ({ name, options, onChange }) => {
  return (
    <select
      className="bg-orange-500 py-2 px-4 rounded w-full"
      name={name}
      onChange={onChange}
    >
      {options?.map((opt: any, idx: any) => (
        <option value={idx}>{opt?.name}</option>
      ))}
    </select>
  );
};

export default Select;
