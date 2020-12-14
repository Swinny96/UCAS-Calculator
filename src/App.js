import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Calculator from "./components/calculator/calculator";
import Api from "./components/calculator/api";
import Calc from "./components/calculator/ucas-api";
import Splice from "./components/splicing";
import Splicing from "./components/test2";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }

  const handleSubmit = (e) => {
    e.preventDefualt();
    console.log("InputFields", inputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, {firstName: '', lastName: ''}])
  }

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }

  const classes = useStyles();

  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
    { firstName: "", lastName: "" },
  ]);

  return (
    <PageContainer>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Main>
        <Container>
          <h1>Add new member</h1>
          <form className={classes.root} onSubmit={handleSubmit}>
            {inputFields.map((inputField, index) => (
              <div key={index}>
                <TextField
                  name="firstName"
                  label="First Name"
                  variant="filled"
                  value={inputField.firstName}
                  onChange={event => handleChangeInput(index, event)}
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="filled"
                  value={inputField.lastName}
                  onChange={event => handleChangeInput(index, event)}
                />
                <IconButton
                  onClick={() => handleRemoveFields(index)}
                >
                  <RemoveIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleAddFields()}
                >
                  <AddIcon />
                </IconButton>
              </div>
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
          </form>
        </Container>
        <Calculator />
        <Api />
        <Splice />
        <Splicing />
      </Main>
    </PageContainer>
  );
}

export default App;

const PageContainer = styled.div``;

const Header = styled.header``;

const Logo = styled.img`
  height: 45px;
`;

const Main = styled.main``;
