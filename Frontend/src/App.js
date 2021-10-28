import "./App.css";

import { Provider } from "react-redux";
import { Store } from "./store/Store";

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routers } from "./router";

function App() {
  return (
    <Provider store={Store}>
      <Routers />
    </Provider>
  );
}

export default App;
