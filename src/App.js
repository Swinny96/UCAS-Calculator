import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import MyUCASCalculator from "./components/calculator/UCAS/UCAS-Calculator";
import NewCalc from "./components/calculator/UCAS/NewCalc";
import SimpleSelect from "./components/SimpleTesting/SimpleSelect";
import SimpleAPI from "./components/SimpleTesting/SimpleAPI";
import Combined from "./components/SimpleTesting/Combined";
import NewCalculator from "./components/calculator/UCAS/NewCalculator";

function App() {
  return (
    <PageContainer>
      <MyHeader>
        <Logo src={logo} alt="logo" />
        <h1>Calculator</h1>
      </MyHeader>
      <Main>
        <NewCalculator />
      </Main>
    </PageContainer>
  );
}

export default App;

const PageContainer = styled.div`
  margin: 30px;
`;

const MyHeader = styled.header`
  display: inline-flex;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 45px;
  margin-right: 25px;
`;

const Main = styled.main``;
