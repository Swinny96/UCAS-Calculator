import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class Splice extends Component {
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
        {this.state.courses.map((course, index) => {
          return (
            <div key={index}>
              <Select>
                <MenuItem
                  onChange={(e) => this.handleChange(e, index)}
                  value={course}
                >
                  {course}
                </MenuItem>
              </Select>
              <IconButton onClick={() => this.handleRemove(index)}>
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={(e) => this.addcourse(e)}>
                <AddIcon />
              </IconButton>
            </div>
          );
        })}
        <hr />
        <button onClick={(e) => this.addcourse(e)}>Add Course</button>
        <br />
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </div>
    );
  }
}

export default Splice;
