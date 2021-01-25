import React, { Component } from "react";
import styled from "styled-components";

const Qualfications = {
  int: [
    { points: 1, grade: "1" },
    { points: 2, grade: "2" },
    { points: 3, grade: "3" },
    { points: 4, grade: "4" },
    { points: 5, grade: "5" },
  ],
  ALevel: [
    { points: 56, grade: "A*" },
    { points: 48, grade: "A" },
    { points: 40, grade: "B" },
    { points: 32, grade: "C" },
    { points: 24, grade: "D" },
    { points: 16, grade: "E" },
  ],
  BTEC: [
    { points: 56, grade: "D*" },
    { points: 48, grade: "D" },
    { points: 32, grade: "M" },
    { points: 16, grade: "P" },
  ],
};

export default class UCASCalculator extends Component {
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
    const rows = [...this.state.rows];
    var y = rows[rows.length - 1].points;
    var x = document.getElementById("PointsID").innerHTML;
    var z = Number(x) - Number(y);

    document.getElementById("PointsID").innerHTML = z;
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    var y = rows[idx].points;
    rows.splice(idx, 1);
    this.setState({ rows });
    var x = document.getElementById("PointsID").innerHTML;

    var z = Number(x) - Number(y);
    document.getElementById("PointsID").innerHTML = z;
  };
  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  };
  handleChange() {
    this.setState({ pointsValue: this.state.CourseData.length });
  }
  addCourse() {}
  render() {
    const { dataValue } = this.state;
    const options = Qualfications[dataValue];

    return (
      <Container>
        <QualficationContainer>
          <Select id="CourseSelection" onChange={this.onChange}>
            <Option value="int">Select a Qualfication</Option>
            <Option value="ALevel">A Level</Option>
            <Option value="BTEC">BTEC</Option>
          </Select>
          <Select id="GradesSelection" onChange={this.handleChange}>
            <Option value="0">Select a Grade</Option>
            {options.map((i) => (
              <Option key={i.points} value={i.points} id={i.grade}>
                {i.grade}
              </Option>
            ))}
          </Select>
        </QualficationContainer>{" "}
        <AddQualfication onClick={this.handleAddRow}>
          Add Qualfication
        </AddQualfication>
        <hr />
        <PointsTable>
          <PointsHeader>
            <PointsRow>
              <PointsHead>#</PointsHead>
              <PointsHead>Course</PointsHead>
              <PointsHead>Grade</PointsHead>
              <PointsHead>UCAS Points</PointsHead>
              <PointsHead />
            </PointsRow>
          </PointsHeader>
          <PointsBody>
            {this.state.rows.map((item, idx) => (
              <QualficationRow key={idx}>
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
              </QualficationRow>
            ))}
          </PointsBody>
        </PointsTable>
        <DeleteLastQualfication onClick={this.handleRemoveRow}>
          Delete Last Qualfication
        </DeleteLastQualfication>
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

const QualficationContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
`;

const AddQualfication = styled.button`
  background: #e00223;
  height: 40px;
  width: 100%;
  border: 3px solid;
  border-color: #f10427;
  color: #fff;
  border-radius: 40px;
  padding: 6px 12px;
  font-weight: bold;
  transition: 0.8s;
  font-size: 14px;
  margin: 8px 0px;

  :hover {
    box-shadow: 4px 4px #e00223;
  }
`;
const DeleteQualfication = styled.button`
  width: 100%;
  height: 40px;
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
const DeleteLastQualfication = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 8px;
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

const Select = styled.select`
  background: #fff;
  height: 40px;
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
const Option = styled.option``;
const PointsTable = styled.table`
  width: 100%;
  margin: 8px;
  text-align: left;
`;
const PointsRow = styled.tr``;
const QualficationRow = styled.tr`
  border-radius: 40px;
  padding: 6px 12px;
  font-weight: bold;
  :nth-child(1) {
    display: none;
  }
`;
const PointsHeader = styled.thead``;
const PointsHead = styled.th`
  text-align: center;
`;
const PointsBody = styled.tbody`
  width: 100%;
  tr {
    border: 3px solid #f10427;
  }
`;
const PointsDetails = styled.td`
  text-align: center;
`;
