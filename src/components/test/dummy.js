import React from "react";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import data from "./calculator/ucas.json";
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

function Fields() {
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
      { id: "56", text: "A*" },
      { id: "48", text: "A" },
      { id: "40", text: "B" },
      { id: "32", text: "C" },
      { id: "24", text: "D" },
      { id: "16", text: "E" },
    ],
    BTEC: [
      { id: "56", text: "D*" },
      { id: "48", text: "D" },
      { id: "32", text: "M" },
      { id: "16", text: "P" },
    ],
  };
  const handleChangeInput = (index, event) => {
    const values = [...selectFields];
    values[index][event.target.name] = event.target.value;
    setselectFields(values);
    setCourse(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefualt();
    console.log("selectFields", selectFields);
  };

  const handleAddFields = () => {
    setselectFields([...selectFields, {}]);
  };

  const handleRemoveFields = (index) => {
    const values = [...selectFields];
    values.splice(index, 1);
    setselectFields(values);
  };

  const [selectFields, setselectFields] = useState([
    { firstName: "", lastName: "" },
  ]);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const [course, setCourse] = React.useState("");

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  const handleChange2 = (event) => {
    this.setState({ value: event.target.value });
  };

  const onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  };

  const { dataValue } = this.state;
  const options = lookup[dataValue];

  return (
    <Container>
      <SubText>
        Working out your UCAS points can be a pain - especially when you have
        different types of qualifications. Luckily, our calculator is here to
        help. Just add your qualifications and let our UCAS Calculator do the
        maths!
      </SubText>
      {this.state.SocialData.map((Social, idx) => (
        <div key={idx}>
          <SubHeading>Qualification</SubHeading>
          <UCASForm className={classes.root} onSubmit={handleSubmit}>
            {selectFields.map((selectField, index) => (
              <FormContainer key={index}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Please select a qualification..
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={course}
                    onChange={onChange}
                  >
                    <MenuItem value="BTEC">BTEC</MenuItem>
                  </Select>
                </FormControl>
                <IconButton onClick={() => handleRemoveFields(index)}>
                  <RemoveIcon />
                </IconButton>
                <IconButton onClick={() => handleAddFields()}>
                  <AddIcon />
                </IconButton>
              </FormContainer>
            ))}
          </UCASForm>
          <SubHeading>Grade</SubHeading>
          <UCASForm className={classes.root} onSubmit={handleSubmit}>
            {selectFields.map((selectField, index) => (
              <FormContainer key={index}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Please select a grade..
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={course}
                    onChange={handleChange2}
                  >
                    {options.map((o) => (
                      <MenuItem key={o.id} value={o.id}>
                        {o.text}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <IconButton onClick={() => handleRemoveFields(index)}>
                  <RemoveIcon />
                </IconButton>
                <IconButton onClick={() => handleAddFields()}>
                  <AddIcon />
                </IconButton>
              </FormContainer>
            ))}
          </UCASForm>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<Icon>send</Icon>}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>
      ))}
      <SubHeading>Your Points</SubHeading>
      <Points> --- Your Points</Points>
    </Container>
  );
}

export default Fields;

const UCASForm = styled.form``;
const FormContainer = styled.div``;
const Heading = styled.h1``;
const SubHeading = styled.h3``;
const SubText = styled.p``;
const Points = styled.strong``;