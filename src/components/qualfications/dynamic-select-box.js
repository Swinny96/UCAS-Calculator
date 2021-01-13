import React, { Component, useState } from "react";
import data from "../test/data/data.json";
import Qualfications, { myvalue } from "./qualfications";
import styled from "styled-components";

export default class DynamicSelect extends Component {
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
    /*     this.handleInputVlaueChange = this.handleInputVlaueChange.bind(this); */
    this.handleRemoveCourse = this.handleRemoveCourse.bind(this);
    this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
    // this.selectHandler = this.selectHandler.bind(this);
  }

  handleAddCourse() {
    let array = this.state.CourseData;
    array.push({ id: array.length + 1, Coursename: "" });
    this.setState({ CourseData: array });
  }

  /*   handleInputVlaueChange(e, idx) {
    let nextCourseData = this.state.CourseData.slice();
    nextCourseData[idx].name = e.target.value;
    this.setState({ CourseData: nextCourseData });
  } */

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
    return (
      <Container>
        <MyHeaderSection>
          <Heading>Add Your Qualfications</Heading>
          <AddQualfication type="button" onClick={this.handleAddCourse}>
            + Qualification
          </AddQualfication>
        </MyHeaderSection>
        {this.state.CourseData.map((Course, idx) => (
          <Qualfication key={idx}>
            {/*                   <select
                    onChange={(e) => {
                      this.handleCourseNameChange(e.target.value, idx);
                    }}
                    value={Course.Coursename || "SelectOption"}
                  >
                    <option value="SelectOption" disabled>
                      Select your option
                    </option>
                    {this.state.CourseArray.map((socidata) => (
                      <option
                        value={socidata.name}
                        data={socidata}
                        key={socidata.id}
                      >
                        {socidata.name}
                      </option>
                    ))}
                  </select> */}
            <Qualfications />
            <RemoveQualfication onClick={() => this.handleRemoveCourse(idx)}>
              -
            </RemoveQualfication>
          </Qualfication>
        ))}
        <hr />
        <PointsText>Your UCAS Points Total:</PointsText>{" "}
        <PointsTotal>{this.state.value}</PointsTotal>
      </Container>
    );
  }
}

const Container = styled.div`
  max-width: 400px;
`;
const MyHeaderSection = styled.div`
  display: grid;
  text-align: center;
`;
const Heading = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 8px;
  text-align: left;
`;
const Qualfication = styled.div`
  display: grid;
  margin: 10px 0px;
  text-align: center;
`;
const AddQualfication = styled.button`
  background: #e00223;
  border: 3px solid;
  border-color: #f10427;
  color: #fff;
  border-radius: 40px;
  padding: 6px 12px;
  font-weight: bold;
  transition: 0.8s;
  font-size: 14px;

  :hover {
    box-shadow: 4px 4px #e00223;
  }
`;
const RemoveQualfication = styled.button`
  background: #e00223;
  border: 3px solid;
  border-color: #f10427;
  color: #fff;
  border-radius: 40px;
  padding: 6px 12px;
  font-weight: bold;
  transition: 0.8s;
  font-size: 14px;

  :hover {
    box-shadow: 4px 4px #e00223;
  }
`;
const PointsText = styled.span`
  font-weight: 600;
`;
const PointsTotal = styled.strong``;
