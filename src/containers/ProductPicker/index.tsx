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
      {!myContext.next && <OptionGroup context={myContext} />}
      {myContext.next && <PropertiesOverview />}
    </div>
  );
};

export default ProductPicker;
