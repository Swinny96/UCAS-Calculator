import React, { Component } from 'react';

class Splice extends Component {

    state = {
        countries:[]
    }

    addcourse(){
        this.setState({countries: [...this.state.countries, ""]})
    }

    handleChange(e, index){
        this.state.countries[index] = e.target.value

        this.setState({countries: this.state.countries})

    }

    handleRemove(index){
        this.state.countries.splice(index, 1)

        console.log(this.state.countries, "$$$$");

        this.setState({countries: this.state.countries})
    }

    handleSubmit(e){
        console.log(this.state, "$$$")
    }

render() {
    return(
        <div className="Splice">
            <h1>Course Add</h1>
            <label>Courses</label>
            {
                this.state.countries.map((course,index)=>{
                    return(
                        <div key={index}>
                            <input onChange={(e)=>this.handleChange(e, index)} 
                            value={course} />
                            <button onClick={()=>this.handleRemove(index)}>
                            Remove
                            </button>
                        </div>
                    )
                })
            }
            <hr/>
            <button onClick={(e)=>this.addcourse(e)}>Add Course</button>
            <br/>
            <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
        </div>
    );
}
}

export default Splice;