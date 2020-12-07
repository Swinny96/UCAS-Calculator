import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Calculator from './components/calculator/calculator';
import Api from './components/calculator/api';
import Calc from './components/calculator/ucas-api';
import Splice from './components/splicing';

function App() {
  return (
    <PageContainer>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Main>
        <Calculator />
        <Api />
        <Splice />
      </Main>
    </PageContainer>
  );
}

export default App;

const PageContainer = styled.div``

const Header = styled.header``

const Logo = styled.img`
  height: 45px;
`

const Main = styled.main``
