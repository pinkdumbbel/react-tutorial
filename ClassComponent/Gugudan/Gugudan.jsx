const React = require("react");

class GuGudan extends React.Component {
  state = {
    random1: Math.ceil(Math.random() * 9),
    random2: Math.ceil(Math.random() * 9),
    input: "",
    result: "",
  };

  input;

  onChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const n = this.state.random1 * this.state.random2;

    if (parseInt(this.state.input) === n) {
      this.setState({ result: `${this.state.input} 정답!` });
    } else {
      this.setState({ result: `${this.state.input} 땡!` });
    }

    this.setState({
      random1: Math.ceil(Math.random() * 9),
      random2: Math.ceil(Math.random() * 9),
      input: "",
    });

    this.input.focus();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>{`${this.state.random1} * ${this.state.random2} 는?`}</p>
        <input
          ref={(r) => (this.input = r)}
          type="number"
          onChange={this.onChange}
          value={this.state.input}
        />
        <input type="submit" value="입력!" />
        <p>{this.state.result}</p>
      </form>
    );
  }
}

module.exports = GuGudan;
