import React, { Component } from "react";
import styled from "styled-components";

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
export default class TableTest extends Component {
  state = {
    rows: [{}],
    dataValue: "int",
    value: "",
    name: "",
    CourseData: [],
  };

  handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });
  };
  handleAddRow = () => {
    var gradeField = document.getElementById("GradesSelection");
    var mygrade = gradeField.options[gradeField.selectedIndex].text;
    var x = document.getElementById("PointsID").innerHTML;
    var y = document.getElementById("GradesSelection").value;
    var z = Number(x) + Number(y);

    document.getElementById("PointsID").value = z;
    document.getElementById("PointsID").innerHTML = z;
    const item = {
      name: document.getElementById("CourseSelection").value,
      grade: mygrade,
      points: gradeField.value,
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  };
  handleChange(event) {
    this.setState({ pointsValue: this.state.CourseData.length });
  }
  addCourse() {}
  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];

    return (
      <Container>
        <Select id="CourseSelection" onChange={this.onChange}>
          <Option value="abc">Please Select a Qualfication</Option>
          <Option value="ALevel">A Level</Option>
          <Option value="BTEC">BTEC</Option>
        </Select>
        <Select id="GradesSelection" onChange={this.handleChange}>
          <option value="0">Select Grade</option>
          {options.map((i) => (
            <option key={i.id} value={i.id} id={i.text}>
              {i.text}
            </option>
          ))}
        </Select>
        <AddQualfication onClick={this.handleAddRow}>Add Row</AddQualfication>

        <hr />
        <PointsTable>
          <PoinsHeader>
            <PoinsRow>
              <PoinsHead> # </PoinsHead>
              <PoinsHead> Course </PoinsHead>
              <PoinsHead> Grade </PoinsHead>
              <PoinsHead> UCAS Points </PoinsHead>
              <PoinsHead />
            </PoinsRow>
          </PoinsHeader>
          <PoinsBody>
            {this.state.rows.map((item, idx) => (
              <PointsRow id="addr0" key={idx}>
                <PointsDetails>{idx}</PointsDetails>
                <PointsDetails name="name">
                  {this.state.rows[idx].name}
                </PointsDetails>
                <PointsDetails name="grade">
                  {this.state.rows[idx].grade}
                </PointsDetails>
                <PointsDetails name="points">
                  {this.state.rows[idx].points}
                </PointsDetails>
                <PointsDetails>
                  <DeleteQualfication
                    onClick={this.handleRemoveSpecificRow(idx)}
                  >
                    Remove
                  </DeleteQualfication>
                </PointsDetails>
              </PointsRow>
            ))}
          </PoinsBody>
        </PointsTable>

        <DeleteQualfication onClick={this.handleRemoveRow}>
          Delete Last Row
        </DeleteQualfication>
        <hr />
        <PointsText>Your UCAS Points Total: </PointsText>
        <PointsTotal id="PointsID">0</PointsTotal>
      </Container>
    );
  }
}

const Container = styled.div`
  max-width: 800px;
`;
const PointsText = styled.span`
  font-weight: 600;
`;
const PointsTotal = styled.strong``;

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
  margin-right: 8px;

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

const Add = styled.button`
  background: #fff;
  border: 3px solid;
  border-color: #f10427;
  color: #333;
  border-radius: 40px;
  padding: 6px 12px;
  font-weight: bold;
  transition: 0.6s;
  font-size: 14px;
  margin-right: 8px;

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
const DeleteQualfication = styled.button`
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

const PointsRow = styled.tr`
  :nth-child(1) {
    display: none;
  }
`;
const Option = styled.option``;
const PointsContainer = styled.div`
  margin: 8px;
  text-align: left;
`;
const PointsTable = styled.table`
  width: 100%;
  margin: 8px;
  text-align: left;
`;
const PoinsRow = styled.tr``;
const PoinsHeader = styled.thead``;
const PoinsHead = styled.th``;
const PoinsBody = styled.tbody``;
const PointsDetails = styled.td``;
