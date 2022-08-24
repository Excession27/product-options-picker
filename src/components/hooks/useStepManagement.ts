import { ChangeEvent } from "react";
import { ChosenOptionsType, OptionContextType } from "../../hoc/OptionsContext";
import { PropertyType } from "../../types";
import useOptionQuery from "../OptionStep/useOptionQuery";

const clearOptions = (properties: ChosenOptionsType, title: PropertyType) => {
  if (title === "format") {
    properties = {} as ChosenOptionsType;
  }
  if (title === "pages") {
    properties = {
      format: properties.format,
    } as ChosenOptionsType;
  }
  if (title === "material") {
    properties = {
      format: properties.format,
      pages: properties.pages,
    } as ChosenOptionsType;
  }
  if (title === "color") {
    properties = {
      format: properties.format,
      pages: properties.pages,
      material: properties.material,
    } as ChosenOptionsType;
  }
  return properties;
};

const setCorrectValues = (
  chosenProperties: ChosenOptionsType,
  title: PropertyType,
  e: ChangeEvent<HTMLInputElement>
) => {
  let value: string | number = e.target.value;

  if (title === "format") {
    chosenProperties.format = value;
  }
  if (title === "material") {
    chosenProperties.material = value;
  }
  if (title === "color") {
    chosenProperties.color = value;
  }
  if (title === "pages") {
    chosenProperties.pages = Number(value);
  }

  return chosenProperties;
};

const getPropertiesString = (chosenProperties: ChosenOptionsType): string =>
  `${chosenProperties.format} - ${chosenProperties.pages} - ${chosenProperties.material} - ${chosenProperties.color}`;

const useStepManagement = (
  context: OptionContextType,
  title: PropertyType,
  id: number
) => {
  let data: (string | number)[] = [];
  useOptionQuery(context.chosenProperties)?.forEach((item) => {
    if (context.chosenId === 0) {
      data.push(item.format);
    }
    if (context.chosenId === 1) {
      data.push(item.pages);
    }
    if (context.chosenId === 2) {
      data.push(`${item.weight} ${item.material}`);
    }
    if (context.chosenId === 3) {
      data.push(item.color);
    }
  });

  data = Array.from(new Set(data));

  const clearChoices = () => {
    context.setChosenProperties((properties) => {
      return clearOptions(properties, title);
    });

    context.setChosenId(id);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    context.setChosenProperties((properties) =>
      setCorrectValues(properties, title, e)
    );

    context.setChosenId(id + 1);
  };

  const chosenPropertiesString: string = getPropertiesString(
    context.chosenProperties
  );

  return { data, handleChange, clearChoices, chosenPropertiesString };
};

export default useStepManagement;
