import { Transition } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import {
  ChosenOptionsType,
  OptionContext,
  OptionContextType,
} from "../../hoc/OptionsContext";
import { PropertyType } from "../../types";
import RadioBtn from "../RadioBtn";
import "./OptionStep.css";

type Props = {
  title: PropertyType;
  id: number;
  optionsArray: (string | number)[];
};

// Ovo moze da se napravi nezavisno od podataka, putem ID-ja da se odredjuje sta treba da se brise i da se podaci smestaju u array
const clearOptions = (properties: ChosenOptionsType, title: PropertyType) => {
  if (title === "format") {
    properties = {};
  }
  if (title === "pages") {
    properties = {
      format: properties.format,
    };
  }
  if (title === "material") {
    properties = {
      format: properties.format,
      pages: properties.pages,
    };
  }
  if (title === "color") {
    properties = {
      format: properties.format,
      pages: properties.pages,
      material: properties.material,
    };
  }
  return properties;
};

const OptionStep = ({ title, id, optionsArray }: Props) => {
  const { chosenId, setChosenId, chosenProperties, setChosenProperties } =
    useContext<OptionContextType>(OptionContext);

  const [animateHeight, setAnimateHeight] = useState<any>({});

  // Update height of the radio group
  useEffect(() => {
    setAnimateHeight(() => ({
      out: { opacity: 0, height: 0 },
      in: {
        opacity: 1,
        height: optionsArray?.length * 22 + 1,
      },
      common: { overflow: "hidden" },
      transitionProperty: "height",
    }));
  }, [optionsArray?.length]);

  const clearChoices = () => {
    setChosenProperties((properties) => clearOptions(properties, title));

    if (chosenId > id) {
      setChosenId(id);
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
                <RadioBtn
                  key={index}
                  index={index}
                  title={title}
                  option={option}
                  id={id}
                />
              ))}
            </div>
          )}
        </Transition>
      </div>
    </>
  );
};

export default OptionStep;
