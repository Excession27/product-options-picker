import React, { useContext, useState } from "react";
import { OptionContext, OptionContextType } from "../../hoc/OptionsContext";
import "./OptionStep.css";

type Props = {
  title: string;
  optionsArray: string[];
  id: number;
};

type SelectedType = {
  isSet: boolean;
  text: string;
};

const OptionStep = ({ title, optionsArray, id }: Props) => {
  const { chosen, setChosen, chosenList, setChosenList } =
    useContext<OptionContextType>(OptionContext);
  const [selected, setSelected] = useState<SelectedType>({
    isSet: false,
    text: "",
  });
  const handleChange = (e: any) => {
    setSelected({ isSet: true, text: e.target.value });
    if (chosen <= id) {
      setChosen(id + 1);
    }
  };
  console.log(chosen, id);
  return (
    <div
      className="option"
      onClick={() => {
        if (selected.isSet) {
          setSelected({ isSet: false, text: "" });
        }
        if (chosen > id) {
          setChosen(id);
        }
      }}
    >
      <div className="title__picked">
        <h2 className="option__title">{title}</h2> <p>{selected.text}</p>
      </div>

      {chosen === id &&
        optionsArray.map((option: any, index) => (
          <div key={index} className="option__choices">
            <input
              type="radio"
              name={"test"}
              id={`${title}${index}`}
              value={option}
              onChange={handleChange}
            />
            <label htmlFor={`${title}${index}`}>{option}</label>
          </div>
        ))}
    </div>
  );
};

export default OptionStep;
