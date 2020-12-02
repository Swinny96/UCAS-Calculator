import React, { Component } from 'react';
import data from "./data"; 
import styled from 'styled-components';

class Calculator extends Component {
	render() {
		return (
        <List>
            <h3>Qualification</h3>
            <CoursesSelector>
                {
					data.Experiences.map((experience, i) => {
						return (
							<CourseList key={i}>
								<Course>{experience.companyName}</Course>
							</CourseList>
						);
					})
				}
            </CoursesSelector>
            <h3>Grade</h3>
            <GradeSelector>
                {
					data.Experiences.map((experience, i) => {
						return (
							<Grades key={i}>
								<Grade href={experience.logo}>{experience.logo}</Grade>
							</Grades>
						);
					})
				}
            </GradeSelector>
        </List>
        );
    }
} 
export default Calculator;

const List = styled.div``
const CoursesSelector = styled.div``
const CourseList = styled.div``
const Course = styled.span``
const GradeSelector = styled.div``
const Grades = styled.div``
const Grade = styled.a``