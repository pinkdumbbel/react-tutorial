/* import React from "react";
import ReactDOM from "react-dom";
import Rsp from "./Rsp";
import { hot } from "react-hot-loader/root"; */

const React = require("react");
const ReactDom = require("react-dom");
const Hot = require("./Rsp");

ReactDom.render(<Hot />, document.querySelector("#root"));
