import { useMutation } from "@tanstack/react-query";
import { deleteEntry, editEntry } from "../../api/data";
import { IProductPropertiesType } from "../../types";

export const useDeleteOptionMutation = (id: string) => {
  const deleteMutation = useMutation(async () => {
    await deleteEntry(id);
  });
  return deleteMutation;
};

export const useEditOptionMutation = (
  id: string,
  newData: IProductPropertiesType
) => {
  const editMutation = useMutation(async () => {
    console.log(newData, id);
    const weightAndMaterial = newData.material?.split(" ");
    const edit: IProductPropertiesType = {
      ...newData,
      material: weightAndMaterial![1],
      weight: Number(weightAndMaterial![0]),
    };
    await editEntry(id, edit);
  });
  return editMutation;
};
