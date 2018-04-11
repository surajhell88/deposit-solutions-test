import React from "react";
import { render } from "react-dom";

import App from "./components/App";

import "./styles/main.css";

render(<App />, document.getElementById("app"));

module.hot.accept();
