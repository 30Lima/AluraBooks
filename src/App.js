import Header from "./components/Header/index.js";
import Pesquisa from "./components/Pesquisa/index.js";
import styled from 'styled-components'
import UltimosLancamentos from "./components/UltimosLancamentos/index.js";

const AppContainer = styled.div `
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,rgb(255, 255, 255) 35%,rgb(255, 255, 255));

    li {
      list-style: none;
    }
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
    
  );
}

export default App;

