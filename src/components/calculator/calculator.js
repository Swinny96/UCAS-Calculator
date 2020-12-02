import React, { Component } from 'react';
import data from "./data"; 
import styled from 'styled-components';

class Calculator extends Component {
	render() {
		return (
        <Container>
            <Description>Working out your UCAS points can be a pain - especially when you have different types of qualifications. Luckily, our calculator is here to help. Just add your qualifications and let our UCAS Calculator do the maths!</Description>
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
        );
    }
} 
export default Calculator;
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