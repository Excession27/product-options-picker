import React from "react";
import { OptionContextType } from "../../hoc/OptionsContext";
import { PropertyType } from "../../types";

const RadioBtnList = ({
  title,
  options,
  handleChange,
  context,
}: {
  title: PropertyType;
  options: (string | number)[];
  handleChange: (e: any) => void;
  context: OptionContextType;
}) => {
  return (
    <>
      {options.map((option: string | number, index: number) => (
        <div key={index} className="option__radio">
          <input
            type="radio"
            name={title}
            id={`${title}${index}`}
            value={option}
            onChange={handleChange}
          />
          <label htmlFor={`${title}${index}`}>{option}</label>
        </div>
      ))}
    </>
  );
};

export default RadioBtnList;
