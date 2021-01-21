import React, { Component } from "react";
import styled from "styled-components";

const lookup = {
  int: [
    { grade: "1", value: "1" },
    { grade: "2", value: "2" },
    { grade: "3", value: "3" },
    { grade: "4", value: "4" },
    { grade: "5", value: "5" },
  ],
  abc: [
    { grade: "a", value: "a" },
    { grade: "b", value: "b" },
    { grade: "c", value: "c" },
    { grade: "d", value: "d" },
    { grade: "e", value: "e" },
  ],
  ALevel: [
    { grade: "56", value: "A*" },
    { grade: "48", value: "A" },
    { grade: "40", value: "B" },
    { grade: "32", value: "C" },
    { grade: "24", value: "D" },
    { grade: "16", value: "E" },
  ],
  BTEC: [
    { grade: "56", value: "D*" },
    { grade: "48", value: "D" },
    { grade: "32", value: "M" },
    { grade: "16", value: "P" },
  ],
};

export default class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      value: 'coconut',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <span>{this.state.value}</span>
      </form>
    );
  }
}

const Container = styled.div`
  max-width: 400px;
`;
const MyHeaderSection = styled.div`
  display: grid;
  text-align: center;
`;
const Heading = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 8px;
  text-align: left;
`;
const Qualfication = styled.div`
  display: grid;
  margin: 10px 0px;
  text-align: center;
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
const RemoveQualfication = styled.button`
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
