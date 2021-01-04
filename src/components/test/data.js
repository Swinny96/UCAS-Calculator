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
    <>
      <option key={data.grade1Value} value={data.grade1Value}>
        {data.grade1}
      </option>
      <option key={data.grade2Value} value={data.grade2Value}>
        {data.grade2}
      </option>
      <option key={data.grade3Value} value={data.grade3Value}>
        {data.grade3}
      </option>
      <option key={data.grade4Value} value={data.grade4Value}>
        {data.grade4}
      </option>
      <option key={data.grade5Value} value={data.grade5Value}>
        {data.grade5}
      </option>
      <option key={data.grade6Value} value={data.grade6Value}>
        {data.grade6}
      </option>
    </>
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
          <option value="0">Please Select a Grade</option>
          {grades}
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
