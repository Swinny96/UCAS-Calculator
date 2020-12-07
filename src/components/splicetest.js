import React, { Component } from 'react';
import data from "../components/calculator/data"; 
import styled from 'styled-components';

class Splicer extends Component {

    state = {
        courses:[]
    }

    addcourse(){
        this.setState({courses: [...this.state.courses, ""]})
    }

    handleChange(e, index){
        this.state.courses[index] = e.target.value

        this.setState({courses: this.state.courses})

    }

    handleRemove(index){
        this.state.courses.splice(index, 1)

        console.log(this.state.courses, "$$$$");

        this.setState({courses: this.state.courses})
    }

    handleSubmit(e){
        console.log(this.state, "$$$")
    }

render() {
    return(
        <div className="Splice">
            <Container>
            <Description>Working out your UCAS points can be a pain - especially when you have different types of qualifications. Luckily, our calculator is here to help. Just add your qualifications and let our UCAS Calculator do the maths!</Description>
            <List>
                <h3>Qualification</h3>
                <CoursesSelector>
                    <Courses>
                        <Course>Please select a qualification..</Course>
                        {
                            this.state.courses.map((course,index)=>{
                                data.Experiences.map((experience, i) => {
                                    return (
                                        <div key={index}>
                                                <Course onChange={(e)=>this.handleChange(e, index)} 
                                                value={course} 
                                                key={i}>
                                                {experience.companyName}
                                                </Course>
                                                <button onClick={()=>this.handleRemove(index)}>
                                                Remove
                                                </button>
                                        </div>
                                    )
                                })
                            })
                        }
                        <button onClick={(e)=>this.addcourse(e)}>Add Course</button>
                         <br/>
                        <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
                    </Courses>
                </CoursesSelector>
                <h3>Grade</h3>
                <GradeSelector>
                    <Grades>
                        <Grade>Please select a grade..</Grade>
                        {
                            data.Experiences.map((experience, i) => {
                                return (
                                        <Grade key={i} value="12">{experience.url}</Grade>
                                );
                            })
                        }
                    </Grades>
                </GradeSelector>
                <Points>
                    <PointsTitle>Your Points</PointsTitle>
                    <PointsTotal>---</PointsTotal>
                    <PointsText>Points</PointsText>
                </Points>
            </List>
        </Container>
        </div>
    );
}
}

export default Splicer;


const Container = styled.div``
const Description = styled.p``
const List = styled.div``
const CoursesSelector = styled.div``
const Courses = styled.select``
const Course = styled.option``
const GradeSelector = styled.div``
const Grades = styled.select``
const Grade = styled.option``
const Points = styled.div``
const PointsTitle = styled.h3``
const PointsTotal = styled.span``
const PointsText = styled.span``