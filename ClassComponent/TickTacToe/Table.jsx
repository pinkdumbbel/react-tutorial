import React, { Component } from "react";
import Tr from "./Tr";

class Table extends Component {
  render() {
    const { tableData, onClick, rePlay, winner, same } = this.props;

    return (
      <>
        <table>
          {tableData.map((row, i) => (
            <Tr key={i} row={row} rowIndex={i} onClick={onClick} />
          ))}
        </table>
        {winner && (
          <div>
            <span>{winner}님의 승리</span>
            <button onClick={rePlay}>다시하기</button>
          </div>
        )}
        {same && (
          <div>
            <span>무승부 입니다.</span>
            <button onClick={rePlay}>다시하기</button>
          </div>
        )}
      </>
    );
  }
}

export default Table;
