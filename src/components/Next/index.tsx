import React from "react";
import useOptionQuery from "../OptionStep/useOptionQuery";
import { OptionContextType } from "../Providers/OptionContextProvider/OptionsContext";
import "./Next.css";

const Next = ({ context }: { context: OptionContextType }) => {
  const result = useOptionQuery(context.chosenProperties);
  console.log(result);
  return (
    <button
      onClick={() => {
        context.setNext(true);
        context.setFoundProduct(result[0]);
      }}
    >
      Next
    </button>
  );
};

export default Next;
