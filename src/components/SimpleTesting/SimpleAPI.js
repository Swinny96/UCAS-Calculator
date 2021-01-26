import React, { Component } from "react";

class SimpleApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursegrade: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const url = "https://www.ucas.com/api/tariff/v1/list";
    const response = await fetch(url);
    const data = await response.json();
    var result = [];
    for (var i in data) result.push([i, data[i]]);
    this.setState({ coursegrade: result, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
        <select id="courseSelect" onChange={this.handleChange}>
          <option value="0">Select a Course</option>
          {this.state.coursegrade.map((i) => (
            <option key={i[0]} value={i[0]} id={i[1]}>
              {i[1]}
            </option>
          ))}
        </select>
    );
  }
}
export default SimpleApi;
