import { Transition } from "@mantine/core";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  ChosenOptionsType,
  OptionContext,
  OptionContextType,
} from "../../hoc/OptionsContext";
import "./OptionStep.css";
import useOptionQuery from "./useOptionQuery";

type PropertyType = "color" | "format" | "material" | "pages";
type Props = {
  title: PropertyType;
  id: number;
};

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

const setCorrectValues = (object: any, title: PropertyType, e: any) => {
  let value = e.target.value;
  if (title === "pages") {
    value = Number(e.target.value);
  }
  object[title] = value;

  return object;
};

const OptionStep = ({ title, id }: Props) => {
  const { chosenId, setChosenId, chosenProperties, setChosenProperties } =
    useContext<OptionContextType>(OptionContext);

  const [animateHeight, setAnimateHeight] = useState<any>({});
  const fetch = useOptionQuery(chosenProperties)?.map((item) => {
    if (title === "material") {
      return `${item.weight} ${item[title]}`;
    }
    return item[title];
  });

  //const optionsArray = useMemo(() => Array.from(new Set(fetch)), [fetch]);
  const optionsArray = Array.from(new Set(fetch));

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
  }, [optionsArray.length]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChosenProperties((properties) => setCorrectValues(properties, title, e));

    if (chosenId <= id) {
      setChosenId(id + 1);
    }
  };

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
                <div key={index} className="option__choices">
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
            </div>
          )}
        </Transition>
      </div>
    </>
  );
};

export default OptionStep;
