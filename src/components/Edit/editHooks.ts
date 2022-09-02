import { useMutation } from "@tanstack/react-query";
import { deleteEntry } from "../../api/data";

export const useDeleteOptionMutation = (id: string) => {
  const mutation = useMutation(async () => {
    await deleteEntry(id);
  });
  return mutation;
};
