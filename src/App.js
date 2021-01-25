import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import UCASCalculator from "./components/qualfications/dynamic-select-box";
import TableTest from "./components/qualfications/new";
import Api from "./components/calculator/api";
import Posts from "./components/calculator/api";
import Practice2 from "./components/calculator/api";
import Courses from "./components/calculator/UCAS/UCAS-Courses";
import Grades from "./components/calculator/UCAS/UCAS-Grades";

function App() {
  return (
    <PageContainer>
      <MyHeader>
        <Logo src={logo} alt="logo" />
        <h1>Calculator</h1>
      </MyHeader>
      <Main>
        <UCASCalculator />
        {/* <Courses /> */}
        <Grades />
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
