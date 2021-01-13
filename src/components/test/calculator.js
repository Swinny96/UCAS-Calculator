import React, { Component } from "react";

export default class CalculatorTest extends Component {
  constructor() {
    super();
    this.state = {
      num1: "",
      op: "+",
      num2: "",
    };
  }

  handleNum1 = (e) => {
    this.setState({ num1: e.target.value });
  };
  handleOp = (e) => {
    this.setState({ op: e.target.value });
  };
  handleNum2 = (e) => {
    this.setState({ num2: e.target.value });
  };

  calculate = (num1, op, num2) => {
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);

    if (op === "+") {
      return number1 + number2;
    } else if (op === "-") {
      return number1 - number2;
    } else if (op === "*") {
      return number1 * number2;
    } else if (op === "/") {
      return number1 / number2;
    } else if (op === "%") {
      return number1 % number2;
    }
  };

  render() {
    const { num1, op, num2 } = this.state;
    const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const ops = ["+"];
    let answer = num1 && op && num2 ? this.calculate(num1, op, num2) : "";

    return (
      <div>
        <div>
          <select value={num1} onChange={this.handleNum1}>
            {["", ...nums].map((number) => (
              <option value={number}>{number}</option>
            ))}
          </select>

          <select value={op} onChange={this.handleOp}>
            {["", ...ops].map((number) => (
              <option value={number}>{number}</option>
            ))}
          </select>

          <select value={num2} onChange={this.handleNum2}>
            {["", ...nums].map((number) => (
              <option value={number}>{number}</option>
            ))}
          </select>
        </div>
        <br />
        <div>{answer}</div>
      </div>
    );
  }
}
