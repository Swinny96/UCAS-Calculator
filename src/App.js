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
import DynamicSelect from "./components/qualfications/dynamic-select-box";
import DynamicInput from "./components/test/dynamic-input";
import InputTest2 from "./components/test/dynamic-input2";
import DynamicTesting from "./components/test/dynamic-test";
import MyMulti from "./components/test/Multi-Select-Test";
import Multi from "./components/test/multi";
import DynamicForm from "./components/test/dynamic-form";
import CalculatorTest from "./components/test/calculator";
import LogIn from "./components/test/login-test";
import Product from "./components/test/Product/Product";
import MyBuilder from "./components/test/Builder/MyBuilder";

function App() {
  return (
    <PageContainer>
      <Header>
        <Logo src={logo} alt="logo" />
        <h1>Calculator</h1>
      </Header>
      <Main>
        <DynamicSelect />
      </Main>
    </PageContainer>
  );
}

export default App;

const PageContainer = styled.div`
  margin: 30px;
`;

const Header = styled.header`
  display: inline-flex;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 45px;
  margin-right: 25px;
`;

const Main = styled.main``;
