import React, { Component, Fragment } from "react";
import Keypad from "./Keypad/Keypad.js";
import Screen from "./Screen/Screen.js";
import MemoryBar from "./MemoryBar.js";

class Calculator extends Component {
  state = {
    equation: "",
    result: 0,
    opCount: 0,
    error: "",
    lastResult: [],
    renderMem: [],
    currentKey: ""
  };

  handleKeyDown = (event) => {
    let { key } = event;

    if (key === "Enter") {
      key = "=";
    }
    if (/\d/.test(key)) {
      event.preventDefault();
      key = parseInt(key, 10);
    } else if (key === "Backspace") {
      key = "backspace";
    } else {
    }

    this.handleClick(key);
  };

  onButtonPress = (event) => {
    const pressedButton = event.target.innerHTML;
    this.handleClick(pressedButton);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleClick = (key) => {
    this.setState({ currentKey: key });
    let equation = this.state.equation;
    const pressedButton = key;
    let opCount = this.state.opCount;

    if (pressedButton === "C") return this.clear();
    else if (pressedButton === "CE") return this.setState({ result: 0 });
    else if (
      (pressedButton >= "0" && pressedButton <= "9") ||
      pressedButton === "."
    )
      equation += pressedButton;
    else if (["+", "-", "*", "/", "%"].indexOf(pressedButton) !== -1) {
      if (opCount === 0) opCount += 1;
      else this.calc();

      console.log(equation.slice(-1));

      if (["+", "-", "*", "/", "%"].indexOf(equation.trim().slice(-1)) !== -1) {
        equation = equation.trim();
        equation = equation.substr(0, equation.length - 1);
        equation += " " + pressedButton + " ";
      } else {
        equation += " " + pressedButton + " ";
      }
    } else if (pressedButton === "=") {
      this.calc(true);
    } else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
      this.setState({ error: "" });
    }

    this.setState({ equation: equation, opCount: opCount });
  };

  calc(eqCheck) {
    let equation = this.state.equation;
    try {
      const evalResult = eval(equation);
      const result = Number.isInteger(evalResult)
        ? evalResult
        : evalResult.toFixed(2);
      this.setState({ result: result, opCount: 0, error: "" });
      if (eqCheck) {
        this.setState({
          lastResult: [
            ...this.state.lastResult,
            <MemoryBar result={result} equation={equation} />
          ]
        });
      }
    } catch (error) {
      this.setState({ error: "Invalid Equation" });
    }
  }

  clear() {
    this.setState({ equation: "", result: 0 });
  }

  render() {
    if (this.state.currentKey === "=") {
      this.state.renderMem = this.state.lastResult
        .slice(0)
        .reverse()
        .map((mem) => mem);
      this.state.equation = "";
    }

    return (
      <Fragment className="shadow-box">
        <div className="calculator">
          <Screen
            equation={this.state.equation}
            result={this.state.result}
            error={this.state.error}
          />
          <Keypad onButtonPress={this.onButtonPress} />
        </div>
        <div className="memory">
          <h1 className="memory-header">History</h1>
          {this.state.renderMem}
        </div>
      </Fragment>
    );
  }
}

export default Calculator;
