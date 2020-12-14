import React, { Component } from "react";

class Splicing extends Component {
  state = {
    courses: [
      "A level",
      "Pearson BTEC Level 3 National Extended Diploma (first teaching from September 2016)",
      "Pearson BTEC Level 3 National Diploma (first teaching from September 2016)",
    ],
  };

  addcourse() {
    this.setState({ courses: [...this.state.courses, ""] });
  }

  handleChange(e, index) {
    this.state.courses[index] = e.target.value;

    this.setState({ courses: this.state.courses });
  }

  handleRemove(index) {
    this.state.courses.splice(index, 1);

    console.log(this.state.courses, "$$$$");

    this.setState({ courses: this.state.courses });
  }

  handleSubmit(e) {
    console.log(this.state, "$$$");
  }

  render() {
    return (
      <div className="Splice">
        <h1>Course Add</h1>
        <label>Courses</label>
        <div>
          <select>
            {this.state.courses.map((course, index) => {
              return (
                <>
                  <optgroup key={index}>
                    <option onChange={(e) => this.handleChange(e, index)}>
                      {course}
                    </option>
                  </optgroup>
                  <button onClick={() => this.handleRemove(index)}>
                    Remove
                  </button>
                </>
              );
            })}
          </select>
        </div>
        <hr />
        <button onClick={(e) => this.addcourse(e)}>Add Course</button>
        <br />
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </div>
    );
  }
}

export default Splicing;
