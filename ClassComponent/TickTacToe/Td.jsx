import React, { Component } from "react";

class Td extends Component {
  onClickTd = (y, x) => {
    if (this.props.cell) return;

    this.props.onClick(y, x);
  };
  render() {
    const { cell, cellIndex: x, rowIndex: y } = this.props;

    return <td onClick={() => this.onClickTd(y, x)}>{cell}</td>;
  }
}

export default Td;
