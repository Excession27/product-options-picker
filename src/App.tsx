import React from "react";

import "./App.css";
import OptionGroup from "./containers/OptionGroup";

export const data = [
  { name: "flyer classic" },
  { name: "postcard" },
  { name: "self-mailer" },
  { name: "leaflets / invitation cards" },
  { name: "Saddle-stiched magazines" },
  { name: "enveloped mailing" },
];

const podaci = [
  {
    first: {
      name: "product name",
      option1: {
        name: "op1",
        options: true,
        option1: {
          name: "op1op1",
          options: true,
          option1: {
            name: "op1op1op1",
            option1: { name: "op1op1op1op1", options: false },
            option2: { name: "op1op1op1op2", option: false },
          },
          option2: {
            name: "op1op1op2",
            options: true,
            option1: { name: "op1op1op2op1", option: false },
            option2: { name: "op1op1op2op2", options: false },
          },
        },
        option2: {
          name: "op1op2",
          options: true,
          option1: {
            name: "op1op2op1",
            options: true,
            option1: { name: "op1op2op1op1", options: false },
            option2: { name: "op1op2op1op2", options: false },
          },
          option2: {
            name: "op1op2op2",
            options: true,
            option1: { name: "op1op2op2op1", options: false },
            option2: { name: "op1op2op2op2", options: false },
          },
        },
      },
      option2: {
        name: "op2",
        options: true,
        option1: {
          name: "op2op1",
          options: true,
          option1: {
            name: "op2op1op1",
            option1: { name: "op2op1op1op1", options: false },
            option2: { name: "op2op1op1op2", option: false },
          },
          option2: {
            name: "op2op1op2",
            options: true,
            option1: { name: "op2op1op2op1", option: false },
            option2: { name: "op2op1op2op2", options: false },
          },
        },
        option2: {
          name: "op2op2",
          options: true,
          option1: {
            name: "op2op2op1",
            options: true,
            option1: { name: "op2op2op1op1", options: false },
            option2: { name: "op2op2op1op2", options: false },
          },
          option2: {
            name: "op2op2op2",
            options: true,
            option1: { name: "op2op2op2op1", options: false },
            option2: { name: "op2op2op2op2", options: false },
          },
        },
      },
    },
  },
];

function App() {
  return (
    <div className="App">
      <OptionGroup />
    </div>
  );
}

export default App;
