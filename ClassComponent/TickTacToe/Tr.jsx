import React, { Component } from "react";
import Td from "./Td";

class Tr extends Component {
  render() {
    const { row, rowIndex, rowData, onClick } = this.props;

    return (
      <tbody>
        <tr>
          {row.map((cell, i) => (
            <Td
              key={i}
              cell={cell}
              rowIndex={rowIndex}
              cellIndex={i}
              onClick={onClick}
            />
          ))}
        </tr>
      </tbody>
    );
  }
}

export default Tr;
