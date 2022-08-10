import { Transition } from "@mantine/core";
import React, { useContext } from "react";
import { OptionContext, OptionContextType } from "../../hoc/OptionsContext";
import "./OptionStep.css";
type PropertyType = "color" | "product" | "format" | "material";
type Props = {
  title: PropertyType;
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

  const handleChange = (e: any) => {
    setChosenList((list) => {
      if (title === "product") {
        list = { product: e.target.value, format: "", color: "", material: "" };
      }
      if (title === "format") {
        list = {
          product: list.product,
          format: e.target.value,
          color: "",
          material: "",
        };
      }
      if (title === "material") {
        list = {
          product: list.product,
          format: list.format,
          material: e.target.value,
          color: "",
        };
      }
      if (title === "color") {
        list = {
          product: list.product,
          format: list.format,
          material: list.material,
          color: e.target.value,
        };
      }
      return list;
    });
    if (chosen <= id) {
      setChosen(id + 1);
    }
  };

  const clearChoices = (e: any) => {
    setChosenList((list) => {
      list[title] = "";
      return list;
    });

    if (chosen > id) {
      setChosen(id);
    }
  };

  console.log(chosen, id);
  return (
    <>
      <div className={`option ${chosen < id && "disabled"}`}>
        <div onClick={clearChoices} className="title__picked">
          <h2 className="option__title">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </h2>{" "}
          <Transition
            mounted={chosenList[title].length > 0}
            transition="scale-x"
            duration={400}
            timingFunction="ease"
          >
            {(style) => <p style={style}>{chosenList[title]}</p>}
          </Transition>
        </div>
        <Transition
          mounted={chosen === id || chosenList[title].length > 0}
          transition="scale-y"
          duration={800}
          timingFunction="ease"
        >
          {(styleDiv) => (
            <div style={styleDiv}>
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
          )}
        </Transition>
      </div>
    </>
  );
};

export default OptionStep;
