import { OptionContext, OptionContextType } from "../../hoc/OptionsContext";
import Option from "../../components/OptionStep/index";
import "./OptionGroup.css";
import useOptionQuery from "../../components/OptionStep/useOptionQuery";
import { useContext } from "react";

const OptionGroup = () => {
  const { chosenProperties } = useContext<OptionContextType>(OptionContext);

  let data: Array<(string | number)[]> = [[], [], [], []];

  useOptionQuery(chosenProperties)?.forEach((item) => {
    data[0].push(item.format);
    data[1].push(item.pages);
    data[2].push(`${item.weight} ${item.material}`);
    data[3].push(item.color);
  });

  return (
    <div className="option-group">
      <Option
        key={0}
        title={"format"}
        id={0}
        optionsArray={Array.from(new Set(data[0]))}
      />
      <Option
        key={1}
        title={"pages"}
        id={1}
        optionsArray={Array.from(new Set(data[1]))}
      />
      <Option
        key={2}
        title={"material"}
        id={2}
        optionsArray={Array.from(new Set(data[2]))}
      />
      <Option
        key={3}
        title={"color"}
        id={3}
        optionsArray={Array.from(new Set(data[3]))}
      />
    </div>
  );
};

export default OptionGroup;
