import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getData } from "../../api/data";
import { OptionContext, OptionContextType } from "../../hoc/OptionsContext";

const useOptionQuery = () => {
  const { chosenList } = useContext<OptionContextType>(OptionContext);
  const { data } = useQuery(["get-options", chosenList], async () => {
    return await getData();
  });
  return data;
};

export default useOptionQuery;
