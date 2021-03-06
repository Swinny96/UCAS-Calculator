import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";

const lookup = {
  int: [
    { grade: "1", value: "1" },
    { grade: "2", value: "2" },
    { grade: "3", value: "3" },
    { grade: "4", value: "4" },
    { grade: "5", value: "5" },
  ],
  abc: [
    { grade: "a", value: "a" },
    { grade: "b", value: "b" },
    { grade: "c", value: "c" },
    { grade: "d", value: "d" },
    { grade: "e", value: "e" },
  ],
  ALevel: [
    { grade: "56", value: "A*" },
    { grade: "48", value: "A" },
    { grade: "40", value: "B" },
    { grade: "32", value: "C" },
    { grade: "24", value: "D" },
    { grade: "16", value: "E" },
  ],
  BTEC: [
    { grade: "56", value: "D*" },
    { grade: "48", value: "D" },
    { grade: "32", value: "M" },
    { grade: "16", value: "P" },
  ],
};

export default class Qualfications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: "int",
      value: "",
      name: "",
      CourseData: [],
      count: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddCourse = this.handleAddCourse.bind(this);
    // this.handleInputVlaueChange = this.handleInputVlaueChange.bind(this);
    this.handleRemoveCourse = this.handleRemoveCourse.bind(this);
    /*     this.handleCourseNameChange = this.handleCourseNameChange.bind(this); */
    // this.SelectHandler = this.SelectHandler.bind(this);
  }

/*   componentDidMount() {
    document.title = `You clicked ${this.state.value} times`;
  } */

  handleAddCourse() {
    let array = this.state.CourseData;
    array.push({ id: array.length + 1, Coursename: "" });
    this.setState({ CourseData: array });
  }

  //   handleInputVlaueChange(e, idx) {
  //     let nextCourseData = this.state.CourseData.slice();
  //     nextCourseData[idx].name = e.target.value;
  //     this.setState({ CourseData: nextCourseData });
  //   }

  /*   handleCourseNameChange(CourseName, idx) {
    let nextCourseData = this.state.CourseData.slice();
    nextCourseData[idx].Coursename = CourseName;
    this.setState({ CourseData: nextCourseData });
  } */

  handleRemoveCourse(idx) {
    let someArray = this.state.CourseData;
    someArray.splice(idx, 1);
    this.setState({ CourseData: someArray });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  };

  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];
    const UCASValue = this.state.value;
    return (
      <Qualification>
        <Heading>Qualification</Heading>
        <Select onChange={this.onChange}>
          <Option value="abc">Please Select a Qualfication</Option>
          <Option value="ALevel">A Level</Option>
          <Option value="BTEC">BTEC</Option>
        </Select>
        <Heading>Grades</Heading>
        <Select onChange={this.handleChange}>
          {options.map((i) => (
            <Option key={i.grade} value={i.grade}>
              {i.value}
            </Option>
          ))}
        </Select>
        <PointsContianer>
          <PointsText>UCAS Points:</PointsText>
          <PointsTotal>{UCASValue}</PointsTotal>
        </PointsContianer>
      </Qualification>
    );
  }
}

const Qualification = styled.div`
  margin-bottom: 10px;
  display: grid;
`;
const Heading = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 8px;
  text-align: left;
`;
const Select = styled.select`
  background: #fff;
  border: 3px solid;
  border-color: #f10427;
  color: #333;
  border-radius: 40px;
  padding: 6px 12px;
  font-weight: bold;
  transition: 0.6s;
  font-size: 14px;
  margin: 8px 0px;

  :hover {
    box-shadow: 4px 4px #e00223;
    margin-bottom: 4px;
  }
  :active {
    box-shadow: 4px 4px #e00223;
    margin-bottom: 4px;
  }
  :focus {
    box-shadow: 4px 4px #e00223;
    margin-bottom: 4px;
  }
`;
const Option = styled.option``;
const PointsContianer = styled.div`
  margin: 8px;
  text-align: left;
`;
const PointsText = styled.span`
  font-weight: 600;
`;
const PointsTotal = styled.strong``;
