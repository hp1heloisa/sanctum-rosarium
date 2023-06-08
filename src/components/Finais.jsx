import styled from "styled-components";
import Ladainha from './oracoes/Ladainha';
import Salve from './oracoes/Salve';
import SignumCrucis from "./oracoes/SignumCrucis";

export default function Finais({estado,lingua}){

    if (lingua == 'portugues'){
        return(
            <DIvFinais estado={estado}>
                <Ladainha lingua={lingua}/>
                <SubTum>
                    <p>
                        <span>À</span> vossa proteção recorremos, santa Mãe de Deus; não desprezeis as 
                        nossas súplicas em nossas necessidades; mas livrai-nos sempre de todos os perigos,
                        ó Virgem gloriosa e bendita.
                    </p>
                    <span>Ámem.</span>
                </SubTum>
                <Salve lingua={lingua}/> 
                <DivOra>
                    <p>V. Rogai por nós, Santa Mão de Deus.</p>
                    <p>R. Para que sejamos dignos das promessas de Cristo.</p>
                </DivOra>
                <Oremus>
                    <p>
                        <span>Oremos:</span> Infundi, Senhor, nós vos pedimos, em nossas almas a vossa graça,
                        para que nós, que conhecemos pela Anunciação do Anjo a Encarnação de Jesus Cristo, vosso Filho,
                        cheguemos por sua Paixão e sua Cruz à glória da Ressurreição. Pelo mesmo Jesus Cristo, Senhor Nosso. 
                    </p>
                    <span>Amém.</span>
                </Oremus>
                <SignumCrucis lingua={lingua}/>
            </DIvFinais>
        )
    } else{
        return(
            <DIvFinais estado={estado}>
                <Ladainha />
                <SubTum>
                    <p>
                        <span>Sub</span> tuum praesídium confúgimus, 
                        Sancta Dei Génitrix: nostras deprecatiónes ne 
                        despícias in necessitátibus; sed a perículis cunctis líbera nos semper, 
                        Virgo gloriósa et benedícta.
                    </p>
                    <span>Ámen.</span>
                </SubTum>
                <Salve /> 
                <DivOra>
                    <p>V. Ora pro nobis, sancta Dei Génitrix,</p>
                    <p>R. Ut digni efficiámur promissiónibus Christi.</p>
                </DivOra>
                <Oremus>
                    <p>
                        <span>Orémus:</span> Grátiam tuam, quáesumus, Dómine, méntibus nostris infúnde:
                        ut qui, Ángelo nuntiante, Christi Fili tui incarnatiónem cognóvimus; 
                        per passiónem eius et crucem, ad resurrectiónis glóriam perducámur. 
                        Per eúndem Christum Dóminum nostrum. 
                    </p>
                    <span>Ámen.</span>
                </Oremus>
                <SignumCrucis/>
            </DIvFinais>
        )
    }
}

const DIvFinais = styled.div`
    display: ${props => props.estado};
    display: ${props => props.estado};
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const SubTum = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    p{
        font-family: 'Nunito';
        font-size: 14px;
    }
    span{
        font-weight: 700;
        font-size: 14px;
    }
`

const DivOra = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    p{
        font-family: 'Nunito';
        font-size: 14px;

    }
    >p:nth-child(2){
        font-weight: 700;
    }
`

const Oremus = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    p{
        font-family: 'Nunito';
        font-size: 14px;
        span{
            font-style: 'Italic';
        }
    }
    span{
        font-weight: 700;
        font-size: 14px;
    }
`