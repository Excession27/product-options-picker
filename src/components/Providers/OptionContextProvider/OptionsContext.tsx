import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { ProductPropertiesType } from "../../../types";

export type ChosenOptionsType = {
  format: string;
  material: string;
  color: string;
  pages: number;
};

export type OptionContextType = {
  chosenId: number;
  setChosenId: Dispatch<SetStateAction<number>>;
  chosenProperties: ChosenOptionsType;
  setChosenProperties: Dispatch<SetStateAction<ChosenOptionsType>>;
  next: boolean;
  setNext: Dispatch<SetStateAction<boolean>>;
  foundProduct: ProductPropertiesType;
  setFoundProduct: Dispatch<SetStateAction<ProductPropertiesType>>;
};

const initialState = {
  chosenId: 0,
  setChosenId: () => {},
  chosenProperties: {} as ChosenOptionsType,
  setChosenProperties: () => {},
  next: false,
  setNext: () => {},
  foundProduct: {} as ProductPropertiesType,
  setFoundProduct: () => {},
};

type ContextType = {
  children: ReactNode;
};

export const OptionContext = createContext<OptionContextType>(initialState);

const OptionContextProvider: FC<ContextType> = ({ children }) => {
  const [chosenId, setChosenId] = useState<number>(0);
  const [chosenProperties, setChosenProperties] = useState<ChosenOptionsType>(
    {} as ChosenOptionsType
  );
  const [next, setNext] = useState<boolean>(false);
  const [foundProduct, setFoundProduct] = useState<ProductPropertiesType>(
    {} as ProductPropertiesType
  );

  return (
    <OptionContext.Provider
      value={{
        chosenId,
        setChosenId,
        chosenProperties,
        setChosenProperties,
        next,
        setNext,
        foundProduct,
        setFoundProduct,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export default OptionContextProvider;
