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
    setselectFields([...selectFields, { }]);
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

  return (
    <Container>
      <Heading>Qualification</Heading>
      <UCASForm className={classes.root} onSubmit={handleSubmit}>
        {selectFields.map((selectField, index) => (
          <FormContainer key={index}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-filled-label">Please select a qualification..</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={course}
                onChange={handleChange}
              >
                {data.Courses.map((experience, i) => {
                  return <MenuItem key={i} value={experience}>{experience}</MenuItem>;
                })}
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
      </UCASForm>
    </Container>
  );
}

export default Fields;

const UCASForm = styled.form``
const FormContainer = styled.div``
const Heading = styled.h1``
