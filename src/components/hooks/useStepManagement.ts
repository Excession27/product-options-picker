import { ChangeEvent, useEffect } from 'react';
import {
  ChosenOptionsType,
  OptionContextType,
} from '../Providers/OptionContextProvider/OptionsContext';
import { PropertyType } from '../../types';
import useOptionQuery from '../OptionStep/useOptionQuery';

const clearOptions = (properties: ChosenOptionsType, title: PropertyType) => {
  if (title === 'format') {
    properties = {} as ChosenOptionsType;
  }
  if (title === 'pages') {
    properties = {
      format: properties.format,
    } as ChosenOptionsType;
  }
  if (title === 'material') {
    properties = {
      format: properties.format,
      pages: properties.pages,
    } as ChosenOptionsType;
  }
  if (title === 'color') {
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

  if (title === 'format') {
    chosenProperties.format = value;
  }
  if (title === 'material') {
    chosenProperties.material = value;
  }
  if (title === 'color') {
    chosenProperties.color = value;
  }
  if (title === 'pages') {
    chosenProperties.pages = Number(value);
  }

  return chosenProperties;
};

const getPropertiesString = (chosenProperties: ChosenOptionsType): string =>
  `${chosenProperties.format} - ${chosenProperties.pages} - ${chosenProperties.material} - ${chosenProperties.color}`;

// const params = new URLSearchParams(window.location.search);
// const id = params.get("id");
// console.log(typeof id);

const useStepManagement = (
  context: OptionContextType,
  title: PropertyType,
  step: number
) => {
  let data: (string | number)[] = [];
  // useEffect(() => {
  //   if (!!id) {
  //     context.setChosenProperties({ id: id } as ChosenOptionsType);
  //     context.setChosenStep(4);
  //   }
  // }, [context]);

  let allData = useOptionQuery(context.chosenProperties);

  if (context.chosenStep < 4) {
    allData?.forEach((item) => {
      if (!context.chosenProperties.id) {
        console.log('has entered');
        if (context.chosenStep === 0) {
          data.push(item.format);
        }
        if (context.chosenStep === 1) {
          data.push(item.pages);
        }
        if (context.chosenStep === 2) {
          data.push(`${item.weight} ${item.material}`);
        }
        if (context.chosenStep === 3) {
          data.push(item.color);
        }
      }
    });
  }

  data = Array.from(new Set(data));

  const clearChoices = () => {
    context.setChosenProperties((properties) => {
      return clearOptions(properties, title);
    });

    context.setChosenStep(step);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    context.setChosenProperties((properties) =>
      setCorrectValues(properties, title, e)
    );

    context.setChosenStep(step + 1);
  };

  const chosenPropertiesString: string = getPropertiesString(
    context.chosenProperties
  );

  return { data, handleChange, clearChoices, chosenPropertiesString };
};

export default useStepManagement;
