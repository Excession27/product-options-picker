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
    const { data } = await getData(options);
    return data;
  });

  return data?.data;
};

export default useOptionQuery;
