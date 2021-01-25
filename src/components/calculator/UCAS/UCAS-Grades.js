import React, { Component } from 'react';
import styled from 'styled-components';

class Grades extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gradelist:[{id:"",value:""}],
            loading:false
        }
    };
 

  async componentDidMount() {
    const url = "https://www.ucas.com/api/tariff/v1/view/670c6d53";
    const response = await fetch(url);
    const data = await response.json();
    const stringdata = JSON.stringify(data);
    var splitdata = stringdata.split(',');
    var result = [];
    for(var i in data)
    result.push([i, data [i]]);
    this.setState({ gradelist: result , loading: false });
  }
  
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

   
    return (
       

        <div>
          <select id="gradeSelect" onChange={this.handleChange}>
            <option value="0">Select Qualfication</option>
          {this.state.gradelist.map((i) => (
            <option  key={i[0]} value={i[0]} id={i[1]}>
              {i[1]}
            </option>
          ))}
          </select>
          <select id="gradeSelect" onChange={this.handleChange}>
            <option value="0">Select Grade</option>
          {this.state.gradelist.map((i) => (
            <option  key={i[0]} value={i[0]} id={i[1]}>
              {i[1]}
            </option>
          ))}
          </select>
          <p>Grades Listed: {this.state.gradelist.length}</p>
           <table>
             <tr>
               <th align="left">Grade</th>
               <th align="left">UCAS Points</th>
             </tr>
             {this.state.gradelist.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td name="id">
                      {item[0]}
                      </td>
                      <td name="textvalue">
                        {item[1]}
                      </td>
                      </tr>))}
           </table>
            <p> {this.state.gradelist[10]}</p>

                
            </div>
    );
  }
}
export default Grades;