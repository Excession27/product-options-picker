import React from "react";
import { deleteEntry } from "../../api/data";
import { OptionContextType } from "../../hoc/OptionsContext";

const Edit = ({ context }: { context: OptionContextType }) => {
  return (
    <div>
      <button onClick={() => {}}>Edit</button>
      <button onClick={() => deleteEntry("2")}>Delete</button>
      <button onClick={() => context.setNext(false)}>Reselect</button>
    </div>
  );
};

export default Edit;
