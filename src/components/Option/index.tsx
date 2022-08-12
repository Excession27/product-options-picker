import { Transition } from "@mantine/core";
import React, { ChangeEvent, useContext, useRef } from "react";
import { OptionContext, OptionContextType } from "../../hoc/OptionsContext";
import "./OptionStep.css";

type PropertyType = "color" | "product" | "format" | "material";
type Props = {
  title: PropertyType;
  optionsArray: { name: string }[];
  id: number;
};

const OptionStep = ({ title, optionsArray, id }: Props) => {
  const { chosen, setChosen, chosenList, setChosenList } =
    useContext<OptionContextType>(OptionContext);
  const labelRef = useRef<HTMLLabelElement>(null);

  const animateHeight = {
    out: { opacity: 0.0, height: 0 },
    in: {
      opacity: 1,
      height: optionsArray.length * 22,
    },
    common: { overflow: "hidden" },
    transitionProperty: "height",
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const clearChoices = () => {
    setChosenList((list) => {
      if (title === "product") {
        list = { product: "", format: "", color: "", material: "" };
      }
      if (title === "format") {
        list = {
          product: list.product,
          format: "",
          color: "",
          material: "",
        };
      }
      if (title === "material") {
        list = {
          product: list.product,
          format: list.format,
          material: "",
          color: "",
        };
      }
      if (title === "color") {
        list = {
          product: list.product,
          format: list.format,
          material: list.material,
          color: "",
        };
      }
      return list;
    });

    if (chosen > id) {
      setChosen(id);
    }
  };

  return (
    <>
      <div className={`option ${chosen < id && "disabled"}`}>
        <div onClick={clearChoices} className="title__picked">
          <h2 className="option__title">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </h2>
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
          mounted={chosen === id}
          transition={animateHeight}
          duration={400}
          timingFunction="ease-in-out"
        >
          {(styleDiv) => (
            <div style={styleDiv}>
              {optionsArray.map((option, index) => (
                <div key={index} className="option__choices">
                  <input
                    type="radio"
                    name={"test"}
                    id={`${title}${index}`}
                    value={option.name}
                    onChange={handleChange}
                  />
                  <label ref={labelRef} htmlFor={`${title}${index}`}>
                    {option.name}
                  </label>
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
