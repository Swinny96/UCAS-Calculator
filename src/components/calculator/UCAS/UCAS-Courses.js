import React, { Component } from "react";
import styled from "styled-components";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courselist: [{ id: "", value: "" }],
      loading: false,
      CourseData: [],
    };
  }

  async componentDidMount() {
    const url = "https://www.ucas.com/api/tariff/v1/list";
    const response = await fetch(url);
    const data = await response.json();
    const stringdata = JSON.stringify(data);
    var splitdata = stringdata.split(",");
    var result = [];
    for (var i in data) result.push([i, data[i]]);
    this.setState({ courselist: result, loading: false });
  }

  handleAddRow = () => {
    var y = document.getElementById("CourseSelection").value;
    var x = document.getElementById("PointsID").innerHTML = y;
  };

  onChange = ({ target: { value } }) => {
    this.setState({ courselist: value });
  };

  

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <select id="CourseSelection" onChange={this.onChange}>
          <option value="0">Select Qualfication</option>
          {this.state.courselist.map((i) => (
            <option key={i[0]} value={i[0]} id={i[1]}>
              {i[1]}
            </option>
          ))}
        </select>
        <span id="PointsID"></span>
      </div>
    );
  }
}
export default Courses;
