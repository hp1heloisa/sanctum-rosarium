import styled from "styled-components";
import PaiNosso from "./PaiNosso";
import AveMAria from "./AveMaria";
import Gloria from "./Gloria";
import Maria from "./Maria";
import MiIesu from "./MiIesu";


export default function OracaoMisterio({estado}){
    return(
        <DivMisterio estado={estado}>
            <PaiNosso />
            <AveMAria vezes={'(10x)'}/>
            <Gloria />
            <Maria />
            <MiIesu />
        </DivMisterio>
    )
}

const DivMisterio = styled.div`
    display: ${props => props.estado};
    flex-direction: column;
    align-items: center;
    gap: 10px;
`