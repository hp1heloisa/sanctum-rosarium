import { useEffect, useState } from "react"
import styled from "styled-components"
import AveMAria from "./AveMaria"
import Credo from "./Credo"
import Gloria from "./Gloria"
import Maria from "./Maria"
import MiIesu from "./MiIesu"
import PaiNosso from "./PaiNosso"

export default function Iniciais({estado}) {
    return(
        <DivInicial estado={estado}>
            <Credo />
            <PaiNosso />
            <AveMAria />
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
`