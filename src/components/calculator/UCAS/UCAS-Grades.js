import React, { Component } from "react";
import styled from "styled-components";

class Grades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gradelist: [{ id: "", value: "" }],
      loading: false,
      CourseData: [],
    };
  }

  async componentDidMount() {
    const url = "https://www.ucas.com/api/tariff/v1/view/670c6d53";
    const response = await fetch(url);
    const data = await response.json();
    const stringdata = JSON.stringify(data);
    var splitdata = stringdata.split(",");
    var result = [];
    for (var i in data) result.push([i, data[i]]);
    this.setState({ gradelist: result, loading: false });
  }

  handleChange() {
    this.setState({ pointsValue: this.state.CourseData.length });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
      <select id="gradeSelect" onChange={this.handleChange}>
        <option value="0">Select Grade</option>
        {this.state.gradelist.map((i) => (
          <option key={i[0]} value={i[0]} id={i[1]}>
            {i[1]}
          </option>
        ))}
      </select>
    );
  }
}
export default Grades;
