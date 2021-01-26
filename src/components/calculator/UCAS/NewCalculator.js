import React, { Component } from "react";
import styled from "styled-components";

const GradeUrl = "https://www.ucas.com/api/tariff/v1/view/";
const CourseUrl = "https://www.ucas.com/api/tariff/v1/list/";
var gradeclass = "";

export default class NewCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [{}],
      courseid: "",
      value: "",
      courselist: [],
      gradelist: [],
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleAddRow = () => {
    var gradeField = document.getElementById("GradesSelection");
    var courseField = document.getElementById("CourseSelection");
    var mygrade = gradeField.options[gradeField.selectedIndex].text;
    var mycourse = courseField.options[courseField.selectedIndex].text;
    var x = document.getElementById("PointsID").innerHTML;
    var y = document.getElementById("GradesSelection").value;
    var z = Number(x) + Number(y);

    document.getElementById("PointsID").innerHTML = z;
    const item = {
      name: mycourse,
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

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onChange = ({ target: { value } }) => {
    var inputval = value;
    this.setState({ dataValue: inputval });
    var node = document.createElement("LI");
    var textnode = document.createTextNode([value]);
    [gradeclass] = [value];
    this.setState({ courseid: value });
    this.getCourseGrades();
  };
  async getCourseGrades() {
    const grade_url = [GradeUrl] + [gradeclass];
    const grade_response = await fetch(grade_url);
    const grade_data = await grade_response.json();
    var grade_result = [];
    for (var i in grade_data) grade_result.push([i, grade_data[i]]);
    this.setState({ gradelist: grade_result, loading: false });
  }

  async componentDidMount() {
    const courses_url = [CourseUrl];
    const courses_response = await fetch(courses_url);
    const courses_data = await courses_response.json();
    var courses_result = [];
    for (var i in courses_data) courses_result.push([i, courses_data[i]]);
    this.setState({ courselist: courses_result, loading: false });
  }

  render() {
    const { dataValue } = this.state;
    const { courselist } = this.state.courseid;
    return (
      <Container id="mainElement">
        <QualficationContainer>
          <Select id="CourseSelection" onChange={this.onChange}>
            <Option value="0">Select a Qualfication</Option>
            {this.state.courselist.map((i) => (
              <Option key={i[0]} value={i[0]} id={i[1]}>
                {i[1]}
              </Option>
            ))}
          </Select>
          <Select id="GradesSelection" onChange={this.handleChange}>
            <Option value="0">Select an grade</Option>
            {this.state.gradelist.map((i) => (
              <Option key={i[0]} value={i[1]} id={i[1]}>
                {i[0]}
              </Option>
            ))}
          </Select>
        </QualficationContainer>
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
