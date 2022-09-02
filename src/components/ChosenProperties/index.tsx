import React from "react";
import { OptionContextType } from "../Providers/OptionContextProvider/OptionsContext";
import useStepManagement from "../hooks/useStepManagement";

const ChosenProperties = ({ context }: { context: OptionContextType }) => {
  const { chosenPropertiesString } = useStepManagement(context, "format", 0);

  return <h2>{chosenPropertiesString}</h2>;
};

export default ChosenProperties;
