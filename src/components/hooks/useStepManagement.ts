import { ChangeEvent } from "react";
import { ChosenOptionsType, OptionContextType } from "../../hoc/OptionsContext";
import { PropertyType } from "../../types";

const useStepManagement = (
  context: OptionContextType,
  title: PropertyType,
  id: number
) => {
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

  const clearChoices = () => {
    context.setChosenProperties((properties) =>
      clearOptions(properties, title)
    );

    if (context.chosenId > id) {
      context.setChosenId(id);
    }
  };

  const setCorrectValues = (object: any, title: PropertyType, e: any) => {
    let value = e.target.value;
    if (title === "pages") {
      value = Number(e.target.value);
    }
    object[title] = value;

    return object;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    context.setChosenProperties((properties) =>
      setCorrectValues(properties, title, e)
    );

    if (context.chosenId <= id) {
      context.setChosenId(id + 1);
    }
  };

  return { handleChange, clearChoices };
};

export default useStepManagement;
