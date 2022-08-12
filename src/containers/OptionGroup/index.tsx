import OptionContextProvider from "../../hoc/OptionsContext";
import Option from "../../components/Option/index";
import "./OptionGroup.css";
import ReactQueryProvider from "../../components/Providers";

export const info = [
  { name: "flyer classic" },
  { name: "postcard" },
  { name: "self-mailer" },
  { name: "leaflets / invitation cards" },
  { name: "Saddle-stiched magazines" },
  { name: "enveloped mailing" },
];

const OptionGroup = () => {
  return (
    <OptionContextProvider>
      <ReactQueryProvider>
        <div className="option-group">
          <Option key={1} title={"product"} optionsArray={info} id={0} />
          <Option key={2} title={"format"} optionsArray={info} id={1} />
          <Option key={3} title={"material"} optionsArray={info} id={2} />
          <Option key={4} title={"color"} optionsArray={info} id={3} />
        </div>
      </ReactQueryProvider>
    </OptionContextProvider>
  );
};

export default OptionGroup;
