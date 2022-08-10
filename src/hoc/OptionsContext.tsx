import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export type ChosenOptionsType = {
  product: string;
  format: string;
  material: string;
  color: string;
};

type IObjectKeys = {
  [key: string]: string | number;
};

export type OptionContextType = {
  chosen: number;
  setChosen: Dispatch<SetStateAction<number>>;
  chosenList: ChosenOptionsType;
  setChosenList: Dispatch<SetStateAction<ChosenOptionsType>>;
};

const initialState = {
  chosen: 0,
  setChosen: () => {},
  chosenList: {
    product: "",
    format: "",
    material: "",
    color: "",
  },
  setChosenList: () => {},
};

export const OptionContext = createContext<OptionContextType>(initialState);

const OptionContextProvider = ({ children }: any) => {
  const [chosen, setChosen] = useState<number>(0);
  const [chosenList, setChosenList] = useState<ChosenOptionsType>({
    product: "",
    format: "",
    material: "",
    color: "",
  });

  return (
    <OptionContext.Provider
      value={{
        chosen,
        setChosen,
        chosenList,
        setChosenList,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export default OptionContextProvider;
