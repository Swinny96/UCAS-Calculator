import React, { Component, useState } from "react";

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

export default class Grades extends Component {
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
    this.handleInputVlaueChange = this.handleInputVlaueChange.bind(this);
    this.handleRemoveCourse = this.handleRemoveCourse.bind(this);
    this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
    // this.selectHandler = this.selectHandler.bind(this);
  }

  handleAddCourse() {
    let array = this.state.CourseData;
    array.push({ id: array.length + 1, Coursename: "" });
    this.setState({ CourseData: array });
  }

  handleInputVlaueChange(e, idx) {
    let nextCourseData = this.state.CourseData.slice();
    nextCourseData[idx].name = e.target.value;
    this.setState({ CourseData: nextCourseData });
  }

  handleCourseNameChange(CourseName, idx) {
    let nextCourseData = this.state.CourseData.slice();
    nextCourseData[idx].Coursename = CourseName;
    this.setState({ CourseData: nextCourseData });
  }

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
    return (
        <select onChange={this.handleChange}>
          {options.map((i) => (
            <option key={i.id} value={i.id}>
              {i.text}
            </option>
          ))}
        </select>
    );
  }
}
