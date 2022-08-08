import React, { createContext } from "react";
import OptionContextProvider from "../../hoc/OptionsContext";
import Option from "../../components/Option/index";
import "./OptionGroup.css";

export const info = [
  "flyer classic",
  "postcard",
  "self-mailer",
  "leaflets / invitation cards",
  "Saddle-stiched magazines",
  "enveloped mailing",
];

const OptionGroup = () => {
  return (
    <OptionContextProvider>
      <Option key={1} title={"Product"} optionsArray={info} id={0} />
      <Option key={2} title={"Format"} optionsArray={info} id={1} />
      <Option key={3} title={"Material"} optionsArray={info} id={2} />
      <Option key={4} title={"Color"} optionsArray={info} id={3} />
    </OptionContextProvider>
  );
};

export default OptionGroup;
