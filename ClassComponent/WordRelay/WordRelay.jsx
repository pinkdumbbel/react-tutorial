const { Component } = require("react");
const React = require("react");

class WordRelay extends Component {
  state = {
    word: "추석",
    input: "",
    result: "",
  };
  inputRef;

  onChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const first = this.state.input.split("")[0];
    const last = this.state.word.split("")[
      this.state.word.split("").length - 1
    ];

    if (first === last) {
      this.setState({
        word: this.state.input,
        input: "",
        result: `${this.state.input} 정답!`,
      });
    } else {
      this.setState((prev) => ({
        word: prev.word,
        input: "",
        result: `${this.state.input} 땡!`,
      }));
    }

    this.inputRef.focus();
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.onChange}
            ref={(r) => (this.inputRef = r)}
          />
          <input type="submit" value="입력!" />
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
