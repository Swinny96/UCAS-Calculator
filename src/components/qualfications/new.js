import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";

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
      { id: 56, text: "A*" },
      { id: 48, text: "A" },
      { id: 40, text: "B" },
      { id: 32, text: "C" },
      { id: 24, text: "D" },
      { id: 16, text: "E" },
    ],
    BTEC: [
      { id: 56, text: "D*" },
      { id: 48, text: "D" },
      { id: 32, text: "M" },
      { id: 16, text: "P" },
    ],
  };

export default class TableTest extends Component {
  state = {
    rows: [{}],
    dataValue: "int",
          value: "",
          name: "",
          CourseData: []
    
  };
  
  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  handleAddRow = () => {
    var gradeField = document.getElementById("gradeSelect") ;
    var mygrade = gradeField.options[gradeField.selectedIndex].text;
    var x = document.getElementById("ptId").innerHTML;
    var y = document.getElementById("gradeSelect").value;
    var z = Number(x) + Number(y);
  
   
    document.getElementById("ptId").innerHTML = z;
    const item = {
      name: document.getElementById("courseSelect").value,
      grade:mygrade,
      points:gradeField.value
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleRemoveRow = () => {
    const rows = [...this.state.rows]
    var y = rows[rows.length-1].points;
    var x = document.getElementById("ptId").innerHTML;
    var z = Number(x) - Number(y);
  
   
    document.getElementById("ptId").innerHTML = z;
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
 
    const rows = [...this.state.rows]
    var y = rows[idx].points;
     rows.splice(idx, 1)
    this.setState({ rows })
    var x = document.getElementById("ptId").innerHTML;
   
    var z = Number(x) - Number(y);  
    document.getElementById("ptId").innerHTML = z;
  }
  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
    
  }
  handleChange(event) {
    let someArray = document.getElementsByClassName("Qualification");
    this.setState({ pointsValue: this.state.CourseData.length });
  
    
  }
  addCourse()
         {

         }
  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];

    return (
            <Container>
               <Select id="courseSelect" onChange={this.onChange}>
          <Option value="abc">Please Select a Qualfication</Option>
          <Option value="ALevel">A Level</Option>
          <Option value="BTEC">BTEC</Option>
        </Select>
        <Select id="gradeSelect" onChange={this.handleChange}>
            <option value="0">Select Grade</option>
          {options.map((i) => (
            <option  key={i.id} value={i.id} id={i.text}>
              {i.text}
            </option>
          ))}
         
        </Select>
        <AddQualfication onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </AddQualfication>
       
          
            <hr />
         
          
      
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> # </th>
                    <th className="text-center"> Course </th>
                    <th className="text-center"> Grade </th>
                    <th className="text-center"> UCAS Pts </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <TableRow id="addr0" key={idx}>
                      <td>{idx}</td>
                      <td name="name">
                      {this.state.rows[idx].name}
                      </td>
                      <td name="grade">
                        {this.state.rows[idx].grade}
                      </td>
                      <td name="points">
                            {this.state.rows[idx].points}
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </td>
                    </TableRow>
                  ))}
                </tbody>
              </table>
             
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Row
              </button>
              <hr />
            <PointsText>Your UCAS Points Total: </PointsText>
            <PointsTotal id="ptId">0</PointsTotal>
            </div>
          </div>
        </div>
        </Container>
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
const Qualification = styled.div`
margin-bottom: 10px;
display: grid;
`;

const Select = styled.select`
background: #fff;
border: 3px solid;
border-color: #f10427;
color: #333;
border-radius: 40px;
padding: 6px 12px;
font-weight: bold;
transition: 0.6s;
font-size: 14px;
margin: 8px 0px;

:hover {
box-shadow: 4px 4px #e00223;
margin-bottom: 4px;
}
:active {
box-shadow: 4px 4px #e00223;
margin-bottom: 4px;
}
:focus {
box-shadow: 4px 4px #e00223;
margin-bottom: 4px;
}
`;
const Option = styled.option``;
const PointsContianer = styled.div`
margin: 8px;
text-align: left;
`;
const TableRow = styled.tr`
:nth-child(1) {
    display: none;
  }
`