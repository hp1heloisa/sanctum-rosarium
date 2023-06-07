import { useEffect, useState } from "react"
import styled from "styled-components"
import AveMAria from "./AveMaria"
import Credo from "./Credo"
import Gloria from "./Gloria"
import Maria from "./Maria"
import MiIesu from "./MiIesu"
import PaiNosso from "./PaiNosso"
import PerSignumCrucis from "./PerSignumCrucis"

export default function Iniciais({estado}) {
    return(
        <DivInicial estado={estado}>
            <PerSignumCrucis />
            <Credo />
            <PaiNosso />
            <DivAngelus>
                <p>V. Ángelus Dómini nuntiávit Maríae;</p>
                <p>R. Et concépit de Spíritu Sancto.</p>
            </DivAngelus>
            <AveMAria />
            <DivAngelus>
                <p>V.  Ecce ancílla Dómini.</p>
                <p>R. Fiat mihi secúndum verbum tuum. </p>
            </DivAngelus>
            <h1>Ave Maria</h1>
            <DivAngelus>
                <p>V. Et Verbum caro factum est.</p>
                <p>R. Et habtávit in nobis</p>
            </DivAngelus>
            <h1>Ave Maria</h1>
            <Gloria />
            <MiIesu />
            <Maria />
        </DivInicial>
    )
}

const DivInicial = styled.div`
    display: ${props => props.estado};
    flex-direction: column;
    align-items: center;
    gap: 10px;
    >h1{
        font-family: 'Playball';
        font-size: 23px;
    }
`

const DivAngelus = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    p{
        font-family: 'Lexend Deca';
        font-size: 15px;

    }
    >p:nth-child(2){
        font-weight: 600;
    }
`