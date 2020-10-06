const { Component } = require("react");
const React = require("react");
const { hot } = require("react-hot-loader/root");

let computerChoice = "rock";

const rspCoords = {
  rock: "0",
  scissor: "-142px",
  paper: "-284px",
};

const scores = {
  rock: 0,
  scissor: 1,
  paper: -1,
};

//class형 컴포넌트 라이프사이클
//constructor -> render -> ref -> componentDidMount
//(setState/props 바뀔때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
//부모가 자식컴포넌트를 없앴을때 -> componentWillUnmount -> 소멸
class Rsp extends Component {
  state = {
    result: "",
    imgCoord: "0",
    score: 0,
  };

  interval;

  componentDidMount() {
    //컴포넌트가 첫 렌더링된 후
    this.interval = setInterval(this.changeHand, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeHand = () => {
    if (computerChoice === "rock") {
      computerChoice = "scissor";
    } else if (computerChoice === "scissor") {
      computerChoice = "paper";
    } else if (computerChoice === "paper") {
      computerChoice = "rock";
    }

    this.setState({
      imgCoord: rspCoords[computerChoice],
    });
  };

  onClickBtn = (choice) => () => {
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice];
    const diff = myScore - cpuScore;

    if (diff === 0) {
      this.setState({
        result: "비겼습니다!",
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: "이겼습니다!",
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: "졌습니다!",
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 1000);
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn("rock")}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={this.onClickBtn("scissor")}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn("paper")}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

const Hot = hot(Rsp);
module.exports = Hot;
