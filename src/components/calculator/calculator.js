import React, { Component } from "react";
import data from "./ucas.json";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

class Calculator extends Component {
  render() {
    return (
      <Container>
        <Description>
          Working out your UCAS points can be a pain - especially when you have
          different types of qualifications. Luckily, our calculator is here to
          help. Just add your qualifications and let our UCAS Calculator do the
          maths!
        </Description>
        <List>
          <h3>Qualification</h3>
          <CoursesSelector>
            <FormControl variant="filled">
              <InputLabel id="demo-simple-select-filled-label">
              Please select a qualification..
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
              >
                {data.Courses.map((experience, i) => {
                  return <MenuItem key={i}>{experience}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <IconButton>
              <RemoveIcon />
            </IconButton>
            <IconButton>
              <AddIcon />
            </IconButton>
          </CoursesSelector>
          <h3>Grade</h3>
          <GradeSelector>
            <Grades>
              <Grade>Please select a grade..</Grade>
              {data.Experiences.map((experience, i) => {
                return (
                  <Grade key={i} value="12">
                    {experience.url}
                  </Grade>
                );
              })}
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
const Container = styled.div``;
const Description = styled.p``;
const List = styled.div``;
const CoursesSelector = styled.div``;
const Courses = styled.select``;
const Course = styled.option``;
const GradeSelector = styled.div``;
const Grades = styled.select``;
const Grade = styled.option``;
const Points = styled.div``;
const PointsTitle = styled.h3``;
const PointsTotal = styled.span``;
const PointsText = styled.span``;
