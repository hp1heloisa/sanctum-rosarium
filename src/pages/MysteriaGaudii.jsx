import styled from "styled-components"
import nascimento from "../assets/nascimento.webp"
import Iniciais from "../components/Iniciais"

export default function MysteriaGaudii(){
    return(
        <DivTudo>
            <div>
                <h1>Mysteria Gaudii</h1>
            </div>
            <DivOracoes>
                <div>
                    <p>Orações Iniciais</p>
                    <Iniciais />
                </div>
                <div>Primum Mysterium Gaudii</div>
                <div>Secundum Mysterium Gaudii</div>
                <div>Tertium Mysterium Gaudii</div>
                <div>Quartum Mysterium Gaudii</div>
                <div>Quintum Mysterium Gaudii</div>
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
        background-image: url(${nascimento});
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