import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { getData } from "../../api/data";
import { OptionContext, OptionContextType } from "../../hoc/OptionsContext";
import { IProductPropertiesType, ProductPropertiesType } from "../../types";

const useOptionQuery = (
  options: IProductPropertiesType
): ProductPropertiesType[] => {
  const { chosenProperties } = useContext<OptionContextType>(OptionContext);
  const { data } = useQuery(["get-options", chosenProperties], async () => {
    const op = { ...options };
    if (op.material && op.material?.split(" ").length > 0) {
      op.weight = Number(op.material?.split(" ")[0]);
      op.material = options.material?.split(" ")[1];
    }

    const { data } = await getData(op);
    return data;
  });

  return data?.data;
};

export default useOptionQuery;
