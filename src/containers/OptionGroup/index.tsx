import Next from "../../components/Next";
import Option from "../../components/OptionStep/index";
import { OptionContextType } from "../../components/Providers/OptionContextProvider/OptionsContext";
import "./OptionGroup.css";

const OptionGroup = ({ context }: { context: OptionContextType }) => {
  return (
    <div className="option-group">
      <Option key={0} title={"format"} id={0} context={context} />
      <Option key={1} title={"pages"} id={1} context={context} />
      <Option key={2} title={"material"} id={2} context={context} />
      <Option key={3} title={"color"} id={3} context={context} />
      {context.chosenProperties.color && <Next context={context} />}
    </div>
  );
};

export default OptionGroup;
