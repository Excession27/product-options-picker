import React, { useState } from "react";
import "./OptionStep.css";

type Props = {
  title: string;
  optionsArray: string[];
};

type SelectedType = {
  isSet: boolean;
  text: string;
};

const OptionStep = ({ title, optionsArray }: Props) => {
  const [selected, setSelected] = useState<SelectedType>({
    isSet: false,
    text: "",
  });
  const handleChange = (e: any) => {
    setSelected({ isSet: true, text: e.target.value });
  };
  return (
    <div className="option">
      {selected.isSet ? (
        <div className="title__picked">
          <h2 className="option__title">{title}</h2> <p>{selected.text}</p>
        </div>
      ) : (
        <h2 className="option__title">{title}</h2>
      )}

      {!selected.isSet &&
        optionsArray.map((option: any, index) => {
          return (
            <div key={index} className="option__choices">
              <input
                type="radio"
                name={"test"}
                id={option}
                value={option}
                checked={selected === option}
                onChange={handleChange}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          );
        })}
    </div>
  );
};

export default OptionStep;
