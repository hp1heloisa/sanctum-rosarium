import styled from "styled-components";
import PaiNosso from "./oracoes/PaiNosso";
import AveMAria from "./oracoes/AveMaria";
import Gloria from "./oracoes/Gloria";
import Maria from "./oracoes/Maria";
import MiIesu from "./oracoes/MiIesu";


export default function OracaoMisterio({estado,lingua}){

    return(
        <DivMisterio estado={estado}>
            <PaiNosso lingua={lingua}/>
            <AveMAria lingua={lingua} vezes={'(10x)'}/>
            <Gloria lingua={lingua}/>
            <MiIesu lingua={lingua}/>
            <Maria lingua={lingua}/>
        </DivMisterio>
    )
}

const DivMisterio = styled.div`
    display: ${props => props.estado};
    flex-direction: column;
    align-items: center;
    gap: 10px;
`