import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Calculator from "./components/calculator/calculator-test";
import Api from "./components/calculator/api";
import Splice from "./components/splicing";
import Splicing from "./components/test2";
import Fields from "./components/Fields";
import UCAS from "./components/calculator/api-ucas";
import SimpleSelect from "./components/material";
import SelectCalc from "./components/calculator/select-calc";
import Qual from "./components/calculator/qual";
import MyTest from "./components/test/data";
import Axios from "./components/test/axios-select";
import DynamicSelect from "./components/test/dynamic-select-box";
import DynamicInput from "./components/test/dynamic-input";
import InputTest2 from "./components/test/dynamic-input2";

function App() {
  return (
    <PageContainer>
      <Header>
        <Logo src={logo} alt="logo" />
        <h1>Calculator</h1>
      </Header>
      <Main>
        <Fields />
        <SelectCalc />
        <MyTest />
        <br/>
        <br/>
        <DynamicSelect />
      </Main>
    </PageContainer>
  );
}

export default App;

const PageContainer = styled.div``;

const Header = styled.header`
  display: inline-flex;
`;

const Logo = styled.img`
  height: 45px;
  margin-right: 25px;
`;

const Main = styled.main``;
