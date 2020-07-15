import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import { reducer } from "./reducers/reducer";
import "bulma/css/bulma.css";
import "./styles.scss";

const rootElement = document.getElementById("root");

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
