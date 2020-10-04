import React, { Component } from "react";
import { hot } from "react-hot-loader/root";

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
  };

  tableLocation;

  onClick = (e) => {
    const location = e.target.className;
    const { turn } = this.state;
    const x = parseInt(location.split("_")[1]) - 1;
    const y = parseInt(location.split("_")[0]) - 1;

    const newTableData = [...this.state.tableData];
    newTableData[y] = [...newTableData[y]];
    newTableData[y][x] = this.state.turn;

    if (
      (newTableData[0][0] === turn &&
        newTableData[0][1] === turn &&
        newTableData[0][2] === turn) ||
      (newTableData[1][0] === turn &&
        newTableData[1][1] === turn &&
        newTableData[1][2] === turn) ||
      (newTableData[2][0] === turn &&
        newTableData[2][1] === turn &&
        newTableData[2][2] === turn) ||
      (newTableData[0][0] === turn &&
        newTableData[1][0] === turn &&
        newTableData[2][0] === turn) ||
      (newTableData[0][1] === turn &&
        newTableData[1][1] === turn &&
        newTableData[2][1] === turn) ||
      (newTableData[0][2] === turn &&
        newTableData[1][2] === turn &&
        newTableData[2][2] === turn) ||
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
      });
    } else {
      const gameEndSame = newTableData.filter((r) => {
        return r.includes("");
      });

      if (gameEndSame.length === 0) {
        this.setState({
          tableData: newTableData,
          same: true,
        });
      } else {
        this.setState({
          turn: this.state.turn === "O" ? "X" : "O",
          tableData: newTableData,
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
    const { winner, tableData, same } = this.state;

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
        {winner && (
          <div>
            <span>{winner}님의 승리</span>
            <button onClick={this.rePlay}>다시하기</button>
          </div>
        )}
        {same && (
          <div>
            <span>무승부 입니다.</span>
            <button onClick={this.rePlay}>다시하기</button>
          </div>
        )}
      </>
    );
  }
}

const Hot = hot(TicTacToe);
export default Hot;
