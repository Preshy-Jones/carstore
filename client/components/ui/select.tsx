import React from "react";
import {
  capitalizeFirstLetter,
  priceSplitter,
} from "../../utils/utilityFunctions";

interface Props {
  options: any;
  // {
  //   value: string;
  //   label: string;
  // }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  priceYear?: string;
}

const Select: //correct type for a select component with the options prop
React.FC<Props> = ({ options, onChange, priceYear, ...rest }) => {
  return (
    <select
      className="w-full py-3 px-4 border border-[#ACBEB1] rounded-md col-start-2 col-end-4"
      onChange={(e) => onChange(e)}
      {...rest}
    >
      <option value="">Any</option>
      {options && priceYear
        ? options.map((option: number) => (
            <option key={option} value={option}>
              {priceYear === "price" ? `£${priceSplitter(option)}` : option}
            </option>
          ))
        : options.map((option: any) => (
            <option key={option.name} value={option.name}>
              {capitalizeFirstLetter(option.name)}
            </option>
          ))}
    </select>
  );
};

export default Select;
