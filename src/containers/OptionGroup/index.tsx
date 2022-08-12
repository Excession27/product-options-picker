import OptionContextProvider from "../../hoc/OptionsContext";
import Option from "../../components/Option/index";
import "./OptionGroup.css";

export const info = [
  { name: "flyer classic" },
  { name: "postcard" },
  { name: "self-mailer" },
  { name: "leaflets / invitation cards" },
  { name: "Saddle-stiched magazines" },
  { name: "enveloped mailing" },
];

export const info1 = [
  { name: "DIN A6 (10.5 X 14.8cm, 2 pages)" },
  { name: "DIN long (9.8 X 14.8cm, 2 sides)" },
  { name: "DIN A5 (14.8 X 21cm, 2 pages)" },
  { name: "DIN A5 long (10.5 X 29.7cm, 2 pages)" },
  { name: "DIN A4 (21 X 29.7cm, 2 pages)" },
  { name: "Square Large (14.8 x 14.8 cm, 2 sides" },
  { name: "Square XL (21 x 21 cm, 2 sides" },
];

export const info2 = [
  { name: "135g glossy" },
  { name: "170g glossy" },
  { name: "170g recycled paper" },
  { name: "250g matte" },
  { name: "300g matt" },
  { name: "135g matte" },
  { name: "170g matte" },
  { name: "250g shiny" },
  { name: "300g shiny" },
  { name: "300g recycled paper" },
];

export const info3 = [
  { name: "4/4 colored, no finishing" },
  { name: "4/4 colored, matt dispersion varnish on both sides" },
  { name: "4/0 colored, no finishing" },
  { name: "Envelope: matt, inner part: matt" },
  { name: "Envelope: glossy, inner part: glossy" },
  { name: "4/4 colored, no refinement" },
];

const OptionGroup = () => {
  return (
    <OptionContextProvider>
      <div className="option-group">
        <Option key={1} title={"product"} optionsArray={info} id={0} />
        <Option key={2} title={"format"} optionsArray={info1} id={1} />
        <Option key={3} title={"material"} optionsArray={info2} id={2} />
        <Option key={4} title={"color"} optionsArray={info2} id={3} />
      </div>
    </OptionContextProvider>
  );
};

export default OptionGroup;
