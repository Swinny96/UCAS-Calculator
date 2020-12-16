import React, { Component } from "react";
import styled from "styled-components";

class UCAS extends Component {
  state = {
    loading: true,
    course: null,
  };

  async componentDidMount() {
    const url = "https://www.ucas.com/api/tariff/v1/list";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ course: data[1], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.course) {
      return <strong>Didn't find a course</strong>;
    }

    return (
      <div>
        <div>{this.state.course}</div>
      </div>
    );
  }
}
export default UCAS;
