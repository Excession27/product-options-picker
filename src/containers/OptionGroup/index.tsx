import { useContext } from "react";
import useFormattedData from "../../components/hooks/useFormattedData";
import Option from "../../components/OptionStep/index";
import { OptionContext, OptionContextType } from "../../hoc/OptionsContext";
import "./OptionGroup.css";

const OptionGroup = () => {
  const myContext = useContext<OptionContextType>(OptionContext);
  const data = useFormattedData(myContext.chosenProperties, myContext.chosenId);

  return (
    <div className="option-group">
      <Option
        key={0}
        title={"format"}
        id={0}
        optionsArray={data}
        context={myContext}
      />
      <Option
        key={1}
        title={"pages"}
        id={1}
        optionsArray={data}
        context={myContext}
      />
      <Option
        key={2}
        title={"material"}
        id={2}
        optionsArray={data}
        context={myContext}
      />
      <Option
        key={3}
        title={"color"}
        id={3}
        optionsArray={data}
        context={myContext}
      />
    </div>
  );
};

export default OptionGroup;
