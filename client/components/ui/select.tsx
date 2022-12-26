import React from "react";

interface Props {
  options: {
    value: string;
    label: string;
  }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: //correct type for a select component with the options prop
React.FC<Props> = ({ options, onChange }) => {
  return (
    <select
      className="w-full py-3 px-4 border border-[#ACBEB1] rounded-md col-start-2 col-end-4"
      onChange={(e) => onChange(e)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
