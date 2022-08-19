import { useContext } from "react";
import Option from "../../components/OptionStep/index";
import { OptionContext, OptionContextType } from "../../hoc/OptionsContext";
import "./OptionGroup.css";

const OptionGroup = () => {
  const myContext = useContext<OptionContextType>(OptionContext);

  return (
    <div className="option-group">
      <Option key={0} title={"format"} id={0} context={myContext} />
      <Option key={1} title={"pages"} id={1} context={myContext} />
      <Option key={2} title={"material"} id={2} context={myContext} />
      <Option key={3} title={"color"} id={3} context={myContext} />
    </div>
  );
};

export default OptionGroup;
