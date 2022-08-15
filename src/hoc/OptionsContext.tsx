import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export type ChosenOptionsType = {
  format?: string;
  material?: string;
  color?: string;
  pages?: number;
};

export type OptionContextType = {
  chosenId: number;
  setChosen: Dispatch<SetStateAction<number>>;
  chosenProperties: ChosenOptionsType;
  setChosenProperties: Dispatch<SetStateAction<ChosenOptionsType>>;
};

const initialState = {
  chosenId: 0,
  setChosen: () => {},
  chosenProperties: {},
  setChosenProperties: () => {},
};

export const OptionContext = createContext<OptionContextType>(initialState);

const OptionContextProvider = ({ children }: any) => {
  const [chosenId, setChosen] = useState<number>(0);
  const [chosenProperties, setChosenProperties] = useState<ChosenOptionsType>(
    {}
  );

  return (
    <OptionContext.Provider
      value={{
        chosenId,
        setChosen,
        chosenProperties,
        setChosenProperties,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export default OptionContextProvider;
