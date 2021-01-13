import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

import Multi from "./multi";

export default class Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      id: "",
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddCourse = this.handleAddCourse.bind(this);
    this.handleRemoveCourse = this.handleRemoveCourse.bind(this);
  }

  async getOptions() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = res.data;

    const options = data.map((d) => ({
      value: d.id,
      label: d.name,
    }));

    this.setState({ selectOptions: options });
  }

  handleChange(e) {
    console.log(e);
    this.setState({ id: e.value, name: e.label });
  }

  componentDidMount() {
    this.getOptions();
  }

  handleAddCourse() {
    let array = this.state.selectOptions;
    array.push({ id: array.length + 1, Coursename: "" });
    this.setState({ selectOptions: array });
  }

  handleRemoveCourse(idx) {
    let someArray = this.state.selectOptions;
    someArray.splice(idx, 1);
    this.setState({ selectOptions: someArray });
  }

  onChange = ({ target: { value } }) => {
    this.setState({ selectOptions: value });
  };

  render() {
    console.log(this.state.selectOptions);
    return (
      <div>
        <button type="button" onClick={this.handleAddCourse}>
          Add
        </button>
        {this.state.selectOptions.map((Course, idx) => (
          <div key={idx}>
            <Select
              options={this.state.selectOptions}
              onChange={this.handleChange.bind(this)}
            />
            <p>
              You have selected <strong>{this.state.name}</strong> whose id is{" "}
              <strong>{this.state.id}</strong>
            </p>
            <button onClick={() => this.handleRemoveCourse(idx)}>remove</button>
          </div>
        ))}
      </div>
    );
  }
}
