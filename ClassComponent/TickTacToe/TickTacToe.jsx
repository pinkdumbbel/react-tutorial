import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import Table from "./Table";

class TicTacToe extends Component {
  initTableData = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  state = {
    turn: "O",
    winner: "",
    tableData: this.initTableData,
    same: false,
    cell: [-1, -1],
  };

  onClick = (y, x) => {
    const { turn } = this.state;
    const newTableData = [...this.state.tableData];
    newTableData[y] = [...newTableData[y]];
    newTableData[y][x] = this.state.turn;

    if (
      (newTableData[y][0] === turn &&
        newTableData[y][1] === turn &&
        newTableData[y][2] === turn) ||
      (newTableData[0][x] === turn &&
        newTableData[1][x] === turn &&
        newTableData[2][x] === turn) ||
      (newTableData[0][0] === turn &&
        newTableData[1][1] === turn &&
        newTableData[2][2] === turn) ||
      (newTableData[0][2] === turn &&
        newTableData[1][1] === turn &&
        newTableData[2][0] === turn)
    ) {
      this.setState({
        winner: turn,
        tableData: newTableData,
        cell: [y, x],
      });
    } else {
      const gameEndSame = newTableData.filter((r) => {
        return r.includes("");
      });

      if (gameEndSame.length === 0) {
        this.setState({
          tableData: newTableData,
          same: true,
          cell: [y, x],
        });
      } else {
        this.setState({
          turn: this.state.turn === "O" ? "X" : "O",
          tableData: newTableData,
          cell: [y, x],
        });
      }
    }
  };

  rePlay = () => {
    this.setState({
      turn: "O",
      winner: "",
      tableData: this.initTableData,
      same: false,
    });
  };

  render() {
    const { winner, tableData, same, cell } = this.state;
    let i = 0;

    return (
      <>
        <Table
          tableData={tableData}
          onClick={this.onClick}
          rePlay={this.rePlay}
          winner={winner}
          same={same}
          cell={cell}
        />
      </>
    );
  }
}

const Hot = hot(TicTacToe);
export default Hot;
