import React, { Component } from "react";
import "./styles.css";

export default class Calc extends Component {
  state = {
    result: 0,
    num1: null,
    num2: null
  };

  handleChange = (e) => {
    this.setState({
      num1: e.target.value
    });
  };
  handleChange2 = (e) => {
    this.setState({
      num2: e.target.value
    });
  };

  minus = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 - num2
    });
  };
  multiply = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 * num2
    });
  };
  divide = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 / num2
    });
  };
  add = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: Number(num1) + Number(num2)
    });
  };

  render() {
    return (
      <div>
        <h1>CALCULADORA REACT</h1>
        <div>
          <h2 className="resultado">{this.state.result}</h2>
          <input
            placeholder="NÚMERO"
            onChange={this.handleChange}
            type="number"
          />
          <input
            placeholder="NÚMERO"
            onChange={this.handleChange2}
            type="number"
          />

          <div className="box-button">
            <button onClick={this.minus}>-</button>
            <button onClick={this.add}>+</button>
            <button onClick={this.divide}>/</button>
            <button onClick={this.multiply}>*</button>

            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');
            </style>
          </div>
        </div>
      </div>
    );
  }
}
