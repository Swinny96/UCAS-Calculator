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
`;
const Select = styled.select`
  margin-right: 20px;
`;
const Option = styled.option``;
const Points = styled.div`
  display: inline-block;
`;
const PointsTotal = styled.strong`
  display: inline-block;
`;
