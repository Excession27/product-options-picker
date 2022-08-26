import { useQuery } from "@tanstack/react-query";
import { deleteEntry, editEntry } from "../../api/data";
import { IProductPropertiesType, ProductPropertiesType } from "../../types";

export const useDeleteOptionQuery = (): string => {
  const { status } = useQuery(["delete-option"], async () => {
    await deleteEntry("1");
  });
  console.log(status);
  return status;
};

export const useEditOptionQuery = (
  options: IProductPropertiesType
): ProductPropertiesType[] => {
  const { data, status } = useQuery(["edit-option", options], async () => {
    const { data } = await editEntry(1, {});
    return data;
  });

  return data?.data;
};
