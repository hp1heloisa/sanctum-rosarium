import { useEffect, useState } from "react"
import styled from "styled-components"
import AveMAria from "./oracoes/AveMaria"
import Credo from "./oracoes/Credo"
import Gloria from "./oracoes/Gloria"
import Maria from "./oracoes/Maria"
import MiIesu from "./oracoes/MiIesu"
import PaiNosso from "./oracoes/PaiNosso"
import PerSignumCrucis from "./oracoes/PerSignumCrucis"

export default function Iniciais({estado, lingua}) {

    if (lingua == 'portugues'){
        return(
            <DivInicial estado={estado}>
                <PerSignumCrucis lingua={lingua}/>
                <Credo lingua={lingua}/>
                <PaiNosso lingua={lingua}/>
                <DivAngelus>
                    <p>V. O Anjo do Senho anunciou a Maria.</p>
                    <p>R. E Ela concebeu do Espírito Santo.</p>
                </DivAngelus>
                <AveMAria lingua={lingua}/>
                <DivAngelus>
                    <p>V.  Eis aqui a escrava do Senhor.</p>
                    <p>R. Faça-se em mim segundo a vossa palavra.</p>
                </DivAngelus>
                <DivAve>
                    <h1>Ave Maria</h1>
                    <p>(...)</p>
                </DivAve>
                <DivAngelus>
                    <p>V. E o Verbo de Deus se fez carne.</p>
                    <p>R. E habitou entre nós.</p>
                </DivAngelus>
                <DivAve>
                    <h1>Ave Maria</h1>
                    <p>(...)</p>
                </DivAve>
                <Gloria lingua={lingua}/>
                <MiIesu lingua={lingua}/>
                <Maria lingua={lingua}/>
            </DivInicial>
        )
    } else{
        return(
            <DivInicial estado={estado}>
                <PerSignumCrucis/>
                <Credo/>
                <PaiNosso/>
                <DivAngelus>
                    <p>V. Ángelus Dómini nuntiávit Maríae;</p>
                    <p>R. Et concépit de Spíritu Sancto.</p>
                </DivAngelus>
                <AveMAria/>
                <DivAngelus>
                    <p>V.  Ecce ancílla Dómini.</p>
                    <p>R. Fiat mihi secúndum verbum tuum. </p>
                </DivAngelus>
                <DivAve>
                    <h1>Ave Maria</h1>
                    <p>(...)</p>
                </DivAve>
                <DivAngelus>
                    <p>V. Et Verbum caro factum est.</p>
                    <p>R. Et habtávit in nobis.</p>
                </DivAngelus>
                <DivAve>
                    <h1>Ave Maria</h1>
                    <p>(...)</p>
                </DivAve>
                <Gloria/>
                <MiIesu/>
                <Maria/>
            </DivInicial>
        )
    }
}

const DivInicial = styled.div`
    display: ${props => props.estado};
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const DivAngelus = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    p{
        font-family: 'Nunito';
        font-size: 15px;
    }
    >p:nth-child(2){
        font-weight: 700;
    }
`
const DivAve = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h1{
        font-family: 'Playball';
        font-size: 23px;
    }
    p{
        font-family: 'Nunito';
        font-size: 15px;
    }
`