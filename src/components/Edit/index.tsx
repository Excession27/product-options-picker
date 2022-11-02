import { useState } from "react";
import useStepManagement from "../hooks/useStepManagement";
import { OptionContextType } from "../Providers/OptionContextProvider/OptionsContext";
import { useDeleteOptionMutation, useEditOptionMutation } from "./editHooks";

const Edit = ({ context }: { context: OptionContextType }) => {
  const { chosenPropertiesString } = useStepManagement(context, "format", 0);
  const [editMode, setEditMode] = useState(false);
  const [editedProduct, setEditedProduct] = useState(context.chosenProperties);

  const deleteOption = useDeleteOptionMutation(context.foundProduct.id);
  const editOption = useEditOptionMutation(
    context.foundProduct.id,
    editedProduct
  );

  const handleChange = (e: any) => {
    setEditedProduct((prev) => {
      if (e.target.name === "format") {
        prev.format = e.target.value;
      }
      if (e.target.name === "pages") {
        prev.pages = Number(e.target.value);
      }
      if (e.target.name === "material") {
        prev.material = e.target.value;
      }
      if (e.target.name === "color") {
        prev.color = e.target.value;
      }
      console.log(prev);
      return prev;
    });
  };

  return (
    <div>
      {!editMode ? (
        <h2>{chosenPropertiesString}</h2>
      ) : (
        <div>
          <input
            onChange={handleChange}
            name="format"
            defaultValue={context.chosenProperties.format}
          ></input>
          <input
            type="number"
            onChange={handleChange}
            name="pages"
            defaultValue={context.chosenProperties.pages}
          ></input>
          <input
            onChange={handleChange}
            name="material"
            defaultValue={context.chosenProperties.material}
          ></input>
          <input
            onChange={handleChange}
            name="color"
            defaultValue={context.chosenProperties.color}
          ></input>
        </div>
      )}
      {!editMode ? (
        <>
          <button
            onClick={() => {
              setEditMode((prev) => !prev);
            }}
          >
            Edit
          </button>
          <button onClick={() => deleteOption.mutate()}>Delete</button>
          <button onClick={() => context.setNext(false)}>Reselect</button>{" "}
        </>
      ) : (
        <button
          onClick={() => {
            editOption.mutate();
            setEditMode((prev) => !prev);
            console.log(editedProduct);
          }}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default Edit;
