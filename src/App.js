import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Calculator from "./components/calculator/calculator";
import Api from "./components/calculator/api";
import Splice from "./components/splicing";
import Splicing from "./components/test2";
import Fields from "./components/Fields";
import UCAS from "./components/calculator/api-ucas";
import SimpleSelect from "./components/material";

function App() {

  return (
    <PageContainer>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Main>
        <Fields />
        <UCAS />
        <Api />
        <Calculator/>
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
