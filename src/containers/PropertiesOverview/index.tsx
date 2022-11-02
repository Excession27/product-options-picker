import React, { useContext, useEffect, useRef } from "react";
import Edit from "../../components/Edit";
import {
  OptionContext,
  OptionContextType,
} from "../../components/Providers/OptionContextProvider/OptionsContext";

const PropertiesOverview = () => {
  const myContext = useContext<OptionContextType>(OptionContext);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (myContext.next) dialog!.showModal();

    return () => {
      dialog!.close();
    };
  }, [myContext.next]);

  return (
    <dialog className="ef" ref={dialogRef}>
      <Edit context={myContext} />
    </dialog>
  );
};

export default PropertiesOverview;
