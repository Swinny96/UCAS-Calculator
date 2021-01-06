import React, { Component } from "react";
import data from "./data/data.json";

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

const newdata = data.map((data) => {
  return (
    <option key={data.id} value="ALevel">
      {data.course}
    </option>
  );
});

/* const mycoursedata = () => {
    return(
        <>
        <option value="ALevel">A Levels</option>
        <option value="abc">BTEC</option>
        </>
    );
}; */


export default class DynamicSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: "int",
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  };

  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];
    return (
      <div>
        <h2>Qualification</h2>
        <select onChange={this.onChange}>
          <option value="abc">Please Select a Qualfication</option>
          <option value="ALevel">A Level</option>
          <option value="BTEC">BTEC</option>
        </select>
        <h2>Grades</h2>
        <select onChange={this.handleChange}>
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.text}
            </option>
          ))}
        </select>
        <br/>
        <p>Your UCAS Points Total: {this.state.value}</p>
      </div>
    );
  }
}
