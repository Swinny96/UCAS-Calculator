import React, { Component } from "react";

import styled from "styled-components";

import data from "./data/data.json";

const newdata = data.map((data) => {
  return (
    <option key={data.id} value={data.id}>
      {data.course}
    </option>
  );
});

const grades = data.map((data) => {
  return (
    <option key={data.id} value={data.id}>
      {data.course}
    </option>
  );
});

export default class MyTest extends Component {
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
      <form onSubmit={this.handleSubmit}>
        <select> 
        <option>Select a Course</option>
        {newdata} 
        </select>
        <select value={this.state.value} onChange={this.handleChange}> 
            <option value="0">Please Select A Grade</option>
            <option value="56">A*</option>
        </select>
        <Points>
          Your Points: <PointsTotal>{this.state.value}</PointsTotal>
        </Points>
      </form>
    );
  }
}

const Card = styled.div``;
const CardBody = styled.div``;
const CardTitle = styled.h2``;
const CardText = styled.p``;
const CardColumns = styled.div``;
const Points = styled.div`
  display: inline-block;
`;
const PointsTotal = styled.strong`
  display: inline-block;
`;
