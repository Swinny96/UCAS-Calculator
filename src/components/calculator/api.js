import React, { Component } from 'react';
import styled from 'styled-components';

class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coursegrade:[{id:"",value:""}],
            loading:false
        }
    };
 

  async componentDidMount() {
    const url = "https://www.ucas.com/api/tariff/v1/list";
    const response = await fetch(url);
    const data = await response.json();
    const stringdata = JSON.stringify(data);
    var splitdata = stringdata.split(',');
    var result = [];
    for(var i in data)
    result.push([i, data [i]]);
    this.setState({ coursegrade: result , loading: false });
  }
  
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

   
    return (
       

        <div>
          <select id="gradeSelect" onChange={this.handleChange}>
            <option value="0">Select Grade</option>
          {this.state.coursegrade.map((i) => (
            <option  key={i[0]} value={i[0]} id={i[1]}>
              {i[1]}
            </option>
          ))}
          </select>
          <p>Courses Listed: {this.state.coursegrade.length}</p>
           <table>
             <tr>
               <th align="left">Code</th>
               <th align="left">Course Description</th>
             </tr>
             {this.state.coursegrade.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td name="id">
                      {item[0]}
                      </td>
                      <td name="textvalue">
                        {item[1]}
                      </td>
                      </tr>))}
           </table>
            <p> {this.state.coursegrade[10]}</p>
                
            </div>
    );
  }
}
export default Api;