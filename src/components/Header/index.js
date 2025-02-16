import Logo from "../Logo/index.js";
import Opcao from "../OpcoesHeader/index.js";
import Icone from "../Icones/index.js";
import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
  return (
    <HeaderContainer>
           <Logo/>
           <Opcao/>
           <Icone/>
    </HeaderContainer>
  );
}

export default Header;

