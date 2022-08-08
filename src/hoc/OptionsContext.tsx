import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export type OptionContextType = {
  chosen: number;
  setChosen: Dispatch<SetStateAction<number>>;
  chosenList?: string[];
  setChosenList?: Dispatch<SetStateAction<string[]>>;
};

const initialState = {
  chosen: 0,
  setChosen: () => {},
  chosenList: [],
  setChosenList: () => {},
};

export const OptionContext = createContext<OptionContextType>(initialState);

const OptionContextProvider = ({ children }: any) => {
  const [chosen, setChosen] = useState<number>(0);
  const [chosenList, setChosenList] = useState<string[]>([]);
  const [searchCity, setSearchCity] = useState<string>("");

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
