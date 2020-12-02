import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

function App() {
  return (
    <PageContainer>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
    </PageContainer>
  );
}

export default App;

const PageContainer = styled.div``

const Header = styled.header``

const Logo = styled.img`
  height: 45px;
`
