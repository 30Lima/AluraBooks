import './style.css';
import Logo from "../Logo/index.js";
import Opcao from "../OpcoesHeader/index.js";
import Icone from "../Icones/index.js";

function Header() {
  return (
    <div className = "App">
       <header className='App-header'>
           <Logo/>
           <Opcao/>
           <Icone/>
        </header>
    </div>
  );
}

export default Header;

