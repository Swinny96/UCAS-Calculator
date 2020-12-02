import React, { Component } from 'react';
import data from "./data"; 
import styled from 'styled-components';

class Calculator extends Component {
	render() {
		return (
        <List>
            <h3>Qualification</h3>
            <CoursesSelector>
                <Courses>
                    <Course>Please select a qualification..</Course>
                {
					data.Experiences.map((experience, i) => {
						return (
								<Course key={i}>{experience.companyName}</Course>
						);
					})
				}
                </Courses>
            </CoursesSelector>
            <h3>Grade</h3>
            <GradeSelector>
                <Grades>
                    <Grade>Please select a grade..</Grade>
                {
					data.Experiences.map((experience, i) => {
						return (
								<Grade key={i}>{experience.url}</Grade>
						);
					})
				}
                </Grades>
            </GradeSelector>
        </List>
        );
    }
} 
export default Calculator;

const List = styled.div``
const CoursesSelector = styled.div``
const Courses = styled.select``
const Course = styled.option``
const GradeSelector = styled.div``
const Grades = styled.select``
const Grade = styled.option``