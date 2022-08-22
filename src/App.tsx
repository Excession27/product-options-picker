import React from "react";
import "./App.css";
import ReactQueryProvider from "./components/Providers";
import ProductPicker from "./containers/ProductPicker";
import OptionContextProvider from "./hoc/OptionsContext";

function App() {
  return (
    <div className="App">
      <OptionContextProvider>
        <ReactQueryProvider>
          <ProductPicker />
        </ReactQueryProvider>
      </OptionContextProvider>
    </div>
  );
}

export default App;
