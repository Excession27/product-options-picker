import { Transition } from "@mantine/core";
import { useMemo } from "react";
import { OptionContextType } from "../Providers/OptionContextProvider/OptionsContext";
import { PropertyType } from "../../types";
import useStepManagement from "../hooks/useStepManagement";
import RadioBtnList from "../RadioBtnList";
import "./OptionStep.css";

type Props = {
  title: PropertyType;
  step: number;
  context: OptionContextType;
};

const OptionStep = ({ title, step, context }: Props) => {
  const {
    clearChoices,
    handleChange,
    data: optionsArray,
  } = useStepManagement(context, title, step);

  const animateHeight = useMemo(() => {
    return {
      out: { opacity: 0, height: 0 },
      in: {
        opacity: 1,
        height: optionsArray.length * 22,
      },
      common: { overflow: "hidden" },
      transitionProperty: "height",
    };
  }, [optionsArray.length]);

  return (
    <>
      <div className={`option ${context.chosenStep < step && "disabled"}`}>
        <div onClick={clearChoices} className="title__picked">
          <h2 className="option__title">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </h2>
          <Transition
            mounted={context.chosenProperties[title] !== undefined}
            transition="scale-x"
            duration={400}
            timingFunction="ease"
          >
            {(style) => <p style={style}>{context.chosenProperties[title]}</p>}
          </Transition>
        </div>
        <Transition
          mounted={context.chosenStep === step}
          transition={animateHeight}
          duration={400}
          timingFunction="ease-in-out"
          exitDuration={400}
        >
          {(styleDiv) => (
            <div style={styleDiv}>
              <RadioBtnList
                title={title}
                options={optionsArray}
                handleChange={handleChange}
                context={context}
              />
            </div>
          )}
        </Transition>
      </div>
    </>
  );
};

export default OptionStep;
