import React from "react";
import "./App.css";
import ReactQueryProvider from "./components/Providers";
import OptionGroup from "./containers/OptionGroup";
import OptionContextProvider from "./hoc/OptionsContext";

function App() {
  return (
    <div className="App">
      <OptionContextProvider>
        <ReactQueryProvider>
          <OptionGroup />
        </ReactQueryProvider>
      </OptionContextProvider>
    </div>
  );
}

export default App;
