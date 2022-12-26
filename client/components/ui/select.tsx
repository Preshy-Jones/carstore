import React from "react";
import { capitalizeFirstLetter } from "../../utils/utilityFunctions";

interface Props {
  options: any;
  // {
  //   value: string;
  //   label: string;
  // }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  
}

const Select: //correct type for a select component with the options prop
React.FC<Props> = ({ options, onChange, ...rest }) => {
  return (
    <select
      className="w-full py-3 px-4 border border-[#ACBEB1] rounded-md col-start-2 col-end-4"
      onChange={(e) => onChange(e)}
      {...rest}
    >
      <option value="">Any</option>
      {options &&
        options.map((option: any) => (
          <option key={option.name} value={option.name}>
            {capitalizeFirstLetter(option.name)}
          </option>
        ))}
    </select>
  );
};

export default Select;
