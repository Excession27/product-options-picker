import { OptionContextType } from "../Providers/OptionContextProvider/OptionsContext";
import { useDeleteOptionMutation } from "./editHooks";

const Edit = ({ context }: { context: OptionContextType }) => {
  const deleteOption = useDeleteOptionMutation(context.foundProduct.id);

  return (
    <div>
      <button onClick={() => {}}>Edit</button>
      <button onClick={() => deleteOption.mutate()}>Delete</button>
      <button onClick={() => context.setNext(false)}>Reselect</button>
    </div>
  );
};

export default Edit;
