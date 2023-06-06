import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import styled from "styled-components"

export default function Topo() {

    let [estado, setEstado] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname != '/'){
            setEstado(true);
        }
    },[]);

    return(
        <StyledTopo estado={estado} >
            Sanctum Rosarium
        </StyledTopo>
    )
}

const StyledTopo = styled.div`
    display: ${props => props.estado ? 'flex' : 'none'};
    font-family: 'Playball';
`