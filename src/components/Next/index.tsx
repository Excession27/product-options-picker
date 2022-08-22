import React from "react";
import { OptionContextType } from "../../hoc/OptionsContext";
import "./Next.css";

const Next = ({ context }: { context: OptionContextType }) => {
  return <button onClick={() => context.setNext(true)}>Next</button>;
};

export default Next;
