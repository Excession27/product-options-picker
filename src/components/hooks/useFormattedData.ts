import useOptionQuery from "../../components/OptionStep/useOptionQuery";
import { ChosenOptionsType } from "../../hoc/OptionsContext";

const useFormattedData = (
  chosenProperties: ChosenOptionsType,
  chosenId: number
): (string | number)[] => {
  let data: (string | number)[] = [];
  useOptionQuery(chosenProperties)?.forEach((item) => {
    if (chosenId === 0) {
      data.push(item.format);
    }
    if (chosenId === 1) {
      data.push(item.pages);
    }
    if (chosenId === 2) {
      data.push(`${item.weight} ${item.material}`);
    }
    if (chosenId === 3) {
      data.push(item.color);
    }
  });

  data = Array.from(new Set(data));

  return data;
};

export default useFormattedData;
