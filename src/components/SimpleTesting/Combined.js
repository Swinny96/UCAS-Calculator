import React, { Component } from "react";

const GradeUrl = 'https://www.ucas.com/api/tariff/v1/view/';
const CourseUrl = "https://www.ucas.com/api/tariff/v1/list/";
var gradeclass ="";

export default class Combined extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [{}],
      dataValue: "int",
      courseid: "",
      value: "",
      courselist: [],
      gradelist: [],
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  
  onChange = ({ target: { value }}) => {
      var inputval = value;
    this.setState({ dataValue: inputval});
   var node = document.createElement("LI");
   var textnode = document.createTextNode([value]
   );
   [gradeclass]=[value];
   this.setState({courseid: value});
   this.getCourseGrades()
  
  };
  async getCourseGrades()
  {
    const grade_url =[GradeUrl]+[gradeclass];
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
      <div id="mainElement">
        <h2>Qualification</h2>
              <select onChange={this.onChange}>
          <option value="0">Select a Qualfication</option>
          {this.state.courselist.map((i) => (
            <option key={i[0]} value={i[0]} id={i[0]}>
              {i[1]}
            </option>
          ))}
        </select>
        <h2>Grades</h2>
            <select onChange={this.handleChange}>
          <option value="0">Select an grade</option>
          {this.state.gradelist.map((i) => (
            <option key={i[0]} value={i[1]} id={i[1]}>
              {i[0]}
            </option>
          ))}
        </select>
        <br />
        <p>
          Your UCAS Points Total: <strong>{this.state.value}</strong>
        </p>
      </div>
    );
  }
}