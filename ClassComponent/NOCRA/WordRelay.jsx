//노드의 모듈 불러오는 방식
//const React = require("react");
//const { Component } = React;

import React, { Component } from "react";

class WordRelay extends Component {
  state = {
    text: "Hello, Webpack",
  };

  render() {
    return <div>{this.state.text}</div>;
  }
}

//노드의 모듈 내보내는 방식
//module.exports = WordRelay;
export default WordRelay;
