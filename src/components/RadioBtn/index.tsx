import React, { ChangeEvent, useContext } from "react";
import { OptionContext, OptionContextType } from "../../hoc/OptionsContext";
import { PropertyType } from "../../types";

const setCorrectValues = (object: any, title: PropertyType, e: any) => {
  let value = e.target.value;
  if (title === "pages") {
    value = Number(e.target.value);
  }
  object[title] = value;

  return object;
};

const RadioBtn = ({
  index,
  title,
  option,
  id,
}: {
  index: any;
  title: PropertyType;
  option: string | number;
  id: number;
}) => {
  const { chosenId, setChosenId, setChosenProperties } =
    useContext<OptionContextType>(OptionContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChosenProperties((properties) => setCorrectValues(properties, title, e));

    if (chosenId <= id) {
      setChosenId(id + 1);
    }
  };

  return (
    <div className="option__radio">
      <input
        type="radio"
        name={title}
        id={`${title}${index}`}
        value={option}
        onChange={handleChange}
      />
      <label htmlFor={`${title}${index}`}>{option}</label>
    </div>
  );
};

export default RadioBtn;
