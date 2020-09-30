/* const React = require("react");
const ReactDom = require("react-dom");
const WordRelay = require("./WordRelay"); */

import React from "react";
import ReactDom from "react-dom";
import WordRelay from "./WordRelay";

ReactDom.render(<WordRelay />, document.querySelector("#root"));
