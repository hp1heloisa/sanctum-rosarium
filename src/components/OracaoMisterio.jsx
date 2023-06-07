import styled from "styled-components";
import PaiNosso from "./PaiNosso";
import AveMAria from "./AveMaria";
import Gloria from "./Gloria";
import Maria from "./Maria";
import MiIesu from "./MiIesu";


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