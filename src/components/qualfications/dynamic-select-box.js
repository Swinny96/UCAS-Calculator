import React, { Component } from "react";
import styled from "styled-components";
import "./table.css"

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
    { id: 56, text: "A*" },
    { id: 48, text: "A" },
    { id: 40, text: "B" },
    { id: 32, text: "C" },
    { id: 24, text: "D" },
    { id: 16, text: "E" },
  ],
  BTEC: [
    { id: 56, text: "D*" },
    { id: 48, text: "D" },
    { id: 32, text: "M" },
    { id: 16, text: "P" },
  ],
};
const myCourses = [];

class MyCourses {
  constructor(course, grade, points) {
    this.courseType = course;
    this.courseGrade = grade;
    this.coursePoints = points;
  }
}
export default class UCASCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: "int",
      value: "",
      name: "",
      CourseData: [],
      coursePoints: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let someArray = document.getElementsByClassName("Qualification");
    this.setState({ pointsValue: this.state.CourseData.length });
  }

  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  };
  myFunc(total, num) {
    return total + num;
  }

  addCourseButtonClicked() {
    var mycourse = new MyCourses(
      document.getElementById("courseSelect").value,
      document.getElementById("gradeSelect").id,
      document.getElementById("gradeSelect").value
    );
    myCourses.push(mycourse);
    var cur = document.getElementById("courseSelect");
    var gradeField = document.getElementById("gradeSelect");
    var grade = gradeField.options[gradeField.selectedIndex].text;
    var points = [
      document.getElementById("ptId").value +
        document.getElementById("gradeSelect").value,
    ];
    var x = document.getElementById("ptId").innerHTML;
    var y = document.getElementById("gradeSelect").value;
    var z = Number(x) + Number(y);


    var table = document.getElementById("myTable");

    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = document.getElementById("courseSelect").value;
    cell2.innerHTML = grade;
    cell3.innerHTML = document.getElementById("gradeSelect").value;

    document.getElementById("ptId").value = z;
    document.getElementById("ptId").innerHTML = z;
  }

  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];

    return (
      <Container>
        <Select id="courseSelect" onChange={this.onChange}>
          <Option value="abc">Please Select a Qualfication</Option>
          <Option value="ALevel">A Level</Option>
          <Option value="BTEC">BTEC</Option>
        </Select>
        <Select id="gradeSelect" onChange={this.handleChange}>
          {options.map((i) => (
            <option key={i.id} value={i.id} id={i.text}>
              {i.text}
            </option>
          ))}
        </Select>
        <button onClick={this.addCourseButtonClicked}>Add</button>

        <table id="myTable">
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>UCAS Points</th>
          </tr>
          <tr></tr>
        </table>
        <hr />
        <PointsText>Your UCAS Points Total:</PointsText>
        <PointsTotal id="ptId">0</PointsTotal>
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
const Qualification = styled.div`
  margin-bottom: 10px;
  display: grid;
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
