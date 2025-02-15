import "./style.css";

const optionText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <ul className ='opcoes'>
        { optionText.map( (texto) => (
          <li className = 'opcao'><p>{texto}</p></li>
        ) ) }
     </ul>
    )
}

export default OpcoesHeader;    