import styled from "styled-components";
import Ladainha from './Ladainha';
import Salve from './Salve';
import SignumCrucis from "./SignumCrucis";

export default function Finais({estado}){
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
            <SignumCrucis />
        </DIvFinais>
    )
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
        font-family: 'Lexend Deca';
        font-size: 14px;
    }
    span{
        font-weight: 600;
        font-size: 14px;
    }
`

const DivOra = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    p{
        font-family: 'Lexend Deca';
        font-size: 14px;

    }
    >p:nth-child(2){
        font-weight: 600;
    }
`

const Oremus = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    p{
        font-family: 'Lexend Deca';
        font-size: 14px;
        span{
            font-style: 'italic';
        }
    }
    span{
        font-weight: 600;
        font-size: 14px;
    }
`