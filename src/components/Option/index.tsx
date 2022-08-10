import { Collapse, Transition } from "@mantine/core";
import React, { useContext, useState } from "react";
import {
  ChosenOptionsType,
  OptionContext,
  OptionContextType,
} from "../../hoc/OptionsContext";
import "./OptionStep.css";

type Props = {
  title: string;
  optionsArray: { name: string }[];
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
    <>
      <Transition
        mounted={chosen === id || chosen > id}
        transition="scale-y"
        duration={400}
        timingFunction="ease"
      >
        {(styleDiv) => (
          <div
            style={styleDiv}
            className={`option ${chosen < id && "disabled"}`}
            onClick={() => {
              setSelected({ isSet: false, text: "" });

              if (chosen > id) {
                setChosen(id);
              }
            }}
          >
            <div className="title__picked">
              <h2 className="option__title">{title}</h2>{" "}
              <Transition
                mounted={selected.text.length > 0}
                transition="scale-x"
                duration={400}
                timingFunction="ease"
              >
                {(style) => <p style={style}>{selected.text}</p>}
              </Transition>
            </div>

            {/* <Transition
              mounted={id === chosen}
              transition="fade"
              duration={600}
              timingFunction="ease"
            >
              {(style) => ( */}
            <div>
              {chosen === id &&
                optionsArray.map((option, index) => (
                  <div key={index} className="option__choices">
                    <input
                      type="radio"
                      name={"test"}
                      id={`${title}${index}`}
                      value={option.name}
                      onChange={handleChange}
                    />
                    <label htmlFor={`${title}${index}`}>{option.name}</label>
                  </div>
                ))}
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default OptionStep;
