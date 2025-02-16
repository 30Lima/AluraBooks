import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icons = [perfil, sacola]

function IconesHeader () {
    return (
        <Icones>
          { icons.map( (icon) => (
          <Icone><img src={icon}></img></Icone>
           )) }
        </Icones>
    )
}

export default IconesHeader;