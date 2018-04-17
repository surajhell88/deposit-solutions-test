import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./containers/App";
import initialAppState from "./utils";
import appReducer from "./reducers";

import "./assets/css/fontawesome-all.min.css";
import "./styles/main.css";

const store = createStore(appReducer, initialAppState, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
