import styled from "styled-components"
import ressurreicao from "../assets/ressureciao.jpg"
import Iniciais from "../components/Iniciais"

export default function MysteriaGloriae(){
    return(
        <DivTudo>
            <div>
                <h1>Mysteria Gloriae</h1>
            </div>
            <DivOracoes>
                <div>
                    <p>Orações Iniciais</p>
                    <Iniciais />
                </div>
                <div>Primum Mysterium Gloriosum</div>
                <div>Secundum Mysterium Gloriosum</div>
                <div>Tertium Mysterium Gloriosum</div>
                <div>Quartum Mysterium Gloriosum</div>
                <div>Quintum Mysterium Gloriosum</div>
                <div>Orações Finais</div>
            </DivOracoes>
        </DivTudo>
    )
}

const DivTudo = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Playball';
    gap: 20px;
    >div:nth-child(1){
        background-image: url(${ressurreicao});
        background-size: cover;
        background-position: center top;
        width: 100%;
        height: 150px;
        display: flex; 
        align-items: end;
        justify-content: center;
        h1{
            color: white;
            font-size: 40px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%);
            height: 50px;
            width: 100%;
            text-align: center;
        }
    }
`

const DivOracoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 20px;
`