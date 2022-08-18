import React from "react";
import { PropertyType } from "../../types";

const RadioBtn = ({
  title,
  options,
  handleChange,
}: {
  title: PropertyType;
  options: (string | number)[];
  handleChange: (e: any) => void;
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

export default RadioBtn;
