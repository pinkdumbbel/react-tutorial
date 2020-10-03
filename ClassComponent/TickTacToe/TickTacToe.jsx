import React, { Component } from "react";
import { hot } from "react-hot-loader/root";

class TicTacToe extends Component {
  state = {
    turn: "O",
    winner: "",
    tableData: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
  };
  tableLocation;

  onClick = (e) => {
    const location = e.target.className;

    const x = parseInt(location.split("_")[1]) - 1;
    const y = parseInt(location.split("_")[0]) - 1;

    const newTableData = [...this.state.tableData];
    newTableData[y] = [...newTableData[y]];
    newTableData[y][x] = this.state.turn;

    this.setState({
      turn: this.state.turn === "O" ? "X" : "O",
      tableData: newTableData,
    });
  };

  render() {
    const { winner, tableData } = this.state;

    let i = 0;
    return (
      <>
        <table>
          {tableData.map((tr) => {
            let j = 0;
            i++;
            return (
              <tr key={i}>
                {tr.map((td) => {
                  j++;
                  return (
                    <td
                      key={j}
                      className={`${i}_${j}`}
                      onClick={this.onClick}
                      ref={(r) => (this.tableLocation = r)}
                    >
                      {td}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
        {winner && <div>{winner}님의 승리</div>}
      </>
    );
  }
}

const Hot = hot(TicTacToe);
export default Hot;
