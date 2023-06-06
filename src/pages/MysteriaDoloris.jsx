import styled from "styled-components"
import lacrimosa from "../assets/doloroso.jpg"
import Iniciais from "../components/Iniciais"

export default function MysteriaDoloris(){
    return(
        <DivTudo>
            <div>
                <h1>Mysteria Doloris</h1>
            </div>
            <DivOracoes>
                <div>
                    <p>Orações Iniciais</p>
                    <Iniciais />
                </div>
                <div>Primum Mysterium Doloris</div>
                <div>Secundum Mysterium Doloris</div>
                <div>Tertium Mysterium Doloris</div>
                <div>Quartum Mysterium Doloris</div>
                <div>Quintum Mysterium Doloris</div>
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
        background-image: url(${lacrimosa});
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