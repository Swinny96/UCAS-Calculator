import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

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
    { id: "56", text: "A*" },
    { id: "48", text: "A" },
    { id: "40", text: "B" },
    { id: "32", text: "C" },
    { id: "24", text: "D" },
    { id: "16", text: "E" },
  ],
  BTEC: [
    { id: "56", text: "D*" },
    { id: "48", text: "D" },
    { id: "32", text: "M" },
    { id: "16", text: "P" },
  ],
};

export default class Multi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: "int",
      selectOptions: [],
      value: [],
    };
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
    this.setState({ value: e });
  }

  componentDidMount() {
    this.getOptions();
  }

  render() {
    console.log(this.state.value);
    const { dataValue } = this.state;
    const options = lookup[dataValue];
    return (
      <div>
        <Select
          options={this.state.selectOptions}
          onChange={this.handleChange.bind(this)}
          isMulti
        />
        {this.state.value === null
          ? ""
          : this.state.value.map((v) => <h4>{v.label}</h4>)}
      </div>
    );
  }
}
