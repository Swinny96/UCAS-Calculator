import React, { Component } from "react";
import styled from "styled-components";

class SelectCalc extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your points total is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <SelectForm onSubmit={this.handleSubmit}>
        <Select value={this.state.value} onChange={this.handleChange}>
          <Option value="0">Please Select a grade</Option>
          <Option value="40">A</Option>
          <Option value="30">B</Option>
          <Option value="20">C</Option>
          <Option value="10">D</Option>
        </Select>
        <Arrow class="selector-arrow" aria-hidden="true" />
        <Points>
          Your Points: <PointsTotal>{this.state.value}</PointsTotal>
        </Points>
      </SelectForm>
    );
  }
}
export default SelectCalc;

const SelectForm = styled.form`
  margin: 30px;


  @media (max-width: 600px) {
    margin: 30px 0px;
  }
`;
const Select = styled.select`
  appearance: none;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(204, 204, 204, 0.33) 100%
  );
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #111b40;
  font-size: 16px;
  font-weight: bold;
  line-height: 26px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  width: 50%;
  z-index: 2;

  ::-ms-value {
    background-color: transparent;
    color: #111b40;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 8px;
  }
`;
const Arrow = styled.span`
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #333;
  height: 0;
  position: relative;
  top: 6px;
  right: 14px;
  width: 0;
  z-index: 1;
  zoom: 1;
`;
const Option = styled.option``;
const Points = styled.div`
  display: inline-block;
`;
const PointsTotal = styled.strong`
  display: inline-block;
`;
