import React, { useContext } from "react";
import ChosenProperties from "../../components/ChosenProperties";
import Edit from "../../components/Edit";
import {
  OptionContext,
  OptionContextType,
} from "../../components/Providers/OptionContextProvider/OptionsContext";

const PropertiesOverview = () => {
  const myContext = useContext<OptionContextType>(OptionContext);
  return (
    <div>
      <ChosenProperties context={myContext} />
      <Edit context={myContext} />
    </div>
  );
};

export default PropertiesOverview;
