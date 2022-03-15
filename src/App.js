import React, { Component } from "react";
import "./styles.css";
import styled from "styled-components";

const Titulo = styled.h1`
  color: white;
  
  display: flex;
  justify-content: center;
  margin-left: 65vw;
  font-size: 16vw;
  color:#391463;
  `


const ContainerButton = styled.div `
display: flex;
justify-content:center;
align-items: center;
margin-left: 31vw;
flex-direction: column;
position: relative;
left: 16vw;
bottom: 50vw;
`



const ContainerTudo = styled.div`

  text-align: center;
  margin-top: 5vw;
  position: relative;
  left: -32vw;
`
const Resultado = styled.h2`
text-align: center;
  font-size: 30vw;
  margin-left: 34vw;
  margin-top: 20vw;
  width: 92vw;
  height: 40vw;
  background-color: white;
  border: black inset 1px;
  border-radius: 5vw;
  font-weight: 400`

const InserirUm = styled.input`
border: none;
margin-top: 1vw;
width: 30vw;
height: 50vw;
border-radius: 5vw;
text-align: center;
font-size: 5vw;
border: black inset 1px;
position: relative;
left: 16vw;
`  
const InserirDois = styled.input`
border: none;
margin-top: 1vw;
width: 30vw;
height: 50vw;
border-radius: 5vw;
text-align: center;
font-size: 5vw;
border: black inset 1px;
position: relative;
left: 48vw;

`  




const Minus = styled.button`
  width: 30vw;
  margin-bottom: 1vw;
  height: 12vw;
  border: none;
  border-radius: 50vw;
  margin-left: 1vw;
  background-color: Aquamarine;
  font-size: 10vw;
  color: white;
cursor: pointer;
`
const Add = styled.button`
width: 30vw;
margin-bottom: 1vw;
  height: 12vw;
  border: none;
  border-radius: 50vw;
  margin-left: 1vw;
  background-color: #E71D36;
  font-size: 10vw;
  color: white;
  cursor: pointer;

`
const Divide = styled.button`
width: 30vw;
margin-bottom: 1vw;
  height: 12vw;
  border: none;
  border-radius: 50vw;
  margin-left: 1vw;
  background-color: #330036;
  font-size: 10vw;
  color: white;
  cursor: pointer;
`
const Multiply = styled.button`
width: 30vw;
margin-bottom: 1vw;
  height: 12vw;
  border: none;
  border-radius: 50vw;
  margin-left: 1vw;
  background-color: #F7CB15;
  font-size: 10vw;
  color: white;
  cursor: pointer;
`

const ContainerDois = styled.div`
 
`

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
      <ContainerTudo>
        <Titulo> Calculadora</Titulo>
        <ContainerDois>
          <Resultado>{this.state.result}</Resultado>
          <InserirUm
            placeholder="NÚMERO"
            onChange={this.handleChange}
            type="number"
          />
          <InserirDois
            placeholder="NÚMERO"
            onChange={this.handleChange2}
            type="number"
          />

          <ContainerButton>
            <Minus onClick={this.minus}>-</Minus>
            <Add onClick={this.add}>+</Add>
            <Divide onClick={this.divide}>/</Divide>
            <Multiply onClick={this.multiply}>*</Multiply>

            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');
            </style>
          </ContainerButton>
        </ContainerDois>
      </ContainerTudo>
    );
  }
}
