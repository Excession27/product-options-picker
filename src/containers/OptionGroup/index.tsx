import OptionContextProvider from "../../hoc/OptionsContext";
import Option from "../../components/Option/index";
import "./OptionGroup.css";
import ReactQueryProvider from "../../components/Providers";

const OptionGroup = () => {
  return (
    <OptionContextProvider>
      <ReactQueryProvider>
        <div className="option-group">
          <Option key={0} title={"format"} id={0} />
          <Option key={1} title={"pages"} id={1} />
          <Option key={2} title={"material"} id={2} />
          <Option key={3} title={"color"} id={3} />
        </div>
      </ReactQueryProvider>
    </OptionContextProvider>
  );
};

export default OptionGroup;
