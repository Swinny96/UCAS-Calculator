import React, { Component, useState, useReducer } from "react";
import styled from "styled-components";

const courses = [
    {
      course: "A Level",
      grade: "A*",
      gradeValue: 56,
    },
    {
      course: "BTEC",
      grade: "D*",
      gradeValue: 56,
    },
  ];

const lookup = {
  int: [
    { id: "1", text: "1" },
    { id: "2", text: "2" },
    { id: "3", text: "3" },
    { id: "4", text: "4" },
    { id: "5", text: "5" },
  ],
  abc: [
    { id: "a", text: "a" },
    { id: "b", text: "b" },
    { id: "c", text: "c" },
    { id: "d", text: "d" },
    { id: "e", text: "e" },
  ],
  ALevel: [
    { id: "56", text: "A*" },
    { id: "48", text: "A" },
    { id: "40", text: "B" },
    { id: "32", text: "C" },
    { id: "24", text: "D" },
    { id: "16", text: "E" },
  ],
  BTEC: [
    { id: "56", text: "D*" },
    { id: "48", text: "D" },
    { id: "32", text: "M" },
    { id: "16", text: "P" },
  ],
};

function cartReducer(state, action) {
    switch (action.type) {
      case "add":
        return [...state, action.course];
      case "remove":
        const courseIndex = state.findIndex(
          (item) => item.course === action.course.course
        );
        if (courseIndex < 0) {
          return state;
        }
        const update = [...state];
        update.splice(courseIndex, 1);
        return update;
      default:
        return state;
    }
  }

export default class Qualfications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: "int",
      value: "",
      name: "",
      CourseData: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddCourse = this.handleAddCourse.bind(this);
    // this.handleInputVlaueChange = this.handleInputVlaueChange.bind(this);
    this.handleRemoveCourse = this.handleRemoveCourse.bind(this);
    /*     this.handleCourseNameChange = this.handleCourseNameChange.bind(this); */
    // this.SelectHandler = this.SelectHandler.bind(this);
  }

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
            <Option key={i.id} value={i.id}>
              {i.text}
            </Option>
          ))}
        </Select>
        <PointsContianer>
          <PointsText>UCAS Points:</PointsText>{" "}
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