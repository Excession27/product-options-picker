import React, { useContext } from "react";
import {
  OptionContext,
  OptionContextType,
} from "../../components/Providers/OptionContextProvider/OptionsContext";
import OptionGroup from "../OptionGroup";
import PropertiesOverview from "../PropertiesOverview";

const ProductPicker = () => {
  const myContext = useContext<OptionContextType>(OptionContext);
  return (
    <div>
      <OptionGroup context={myContext} />
      <PropertiesOverview />
    </div>
  );
};

export default ProductPicker;
