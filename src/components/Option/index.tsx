import { Transition } from "@mantine/core";
import { listenerCount } from "process";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  ChosenOptionsType,
  OptionContext,
  OptionContextType,
} from "../../hoc/OptionsContext";
import { IProductPropertiesType } from "../../types";
import "./OptionStep.css";
import useOptionQuery from "./useOptionQuery";

type PropertyType = "color" | "format" | "material" | "pages";
type Props = {
  title: PropertyType;
  id: number;
};

const clearOptions = (list: ChosenOptionsType, title: PropertyType) => {
  if (title === "format") {
    list = {
      format: "",
      color: "",
      material: "",
    };
  }
  if (title === "material") {
    list = {
      format: list.format,
      material: "",
      color: "",
    };
  }
  if (title === "color") {
    list = {
      format: list.format,
      material: list.material,
      color: "",
    };
  }
  return list;
};

const setCorrectValues = (object: any, title: PropertyType, e: any) => {
  let value = e.target.value;
  if (title === "pages") {
    value = Number(e.target.value);
  }
  object[title] = value;

  return object;
};

// TODO: optionsArray's type has to match the one provided by the API
const OptionStep = ({ title, id }: Props) => {
  const { chosenId, setChosen, chosenProperties, setChosenProperties } =
    useContext<OptionContextType>(OptionContext);

  const [animateHeight, setAnimateHeight] = useState<any>({});

  const optionsArray = useOptionQuery(chosenProperties);
  //const setOptionsArray = Array.from(new Set(optionsArray));
  useEffect(() => {
    setAnimateHeight(() => ({
      out: { opacity: 0, height: 0 },
      in: {
        opacity: 1,
        height: optionsArray?.length * 22,
      },
      common: { overflow: "hidden" },
      transitionProperty: "height",
    }));
  }, [optionsArray]);

  console.log(optionsArray);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChosenProperties((properties) => setCorrectValues(properties, title, e));

    if (chosenId <= id) {
      setChosen(id + 1);
    }
  };

  const clearChoices = () => {
    setChosenProperties((properties) => clearOptions(properties, title));

    if (chosenId > id) {
      setChosen(id);
    }
  };

  return (
    <>
      <div className={`option ${chosenId < id && "disabled"}`}>
        <div onClick={clearChoices} className="title__picked">
          <h2 className="option__title">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </h2>
          <Transition
            mounted={chosenProperties[title] !== undefined}
            transition="scale-x"
            duration={400}
            timingFunction="ease"
          >
            {(style) => <p style={style}>{chosenProperties[title]}</p>}
          </Transition>
        </div>
        <Transition
          mounted={chosenId === id && optionsArray?.length > 0}
          transition={animateHeight}
          duration={400}
          timingFunction="ease-in-out"
        >
          {(styleDiv) => (
            <div style={styleDiv}>
              {optionsArray?.map((option, index) => (
                <div key={index} className="option__choices">
                  <input
                    type="radio"
                    name={"test"}
                    id={`${title}${index}`}
                    value={option[title]}
                    onChange={handleChange}
                  />
                  <label htmlFor={`${title}${index}`}>{option[title]}</label>
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
