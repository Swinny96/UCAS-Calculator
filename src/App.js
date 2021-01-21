import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import UCASCalculator from "./components/qualfications/dynamic-select-box";

function App() {
  return (
    <PageContainer>
      <MyHeader>
        <Logo src={logo} alt="logo" />
        <h1>Calculator</h1>
      </MyHeader>
      <Main>
        <UCASCalculator />
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
