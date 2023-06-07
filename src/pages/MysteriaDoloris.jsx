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
                    <h2>Orações Iniciais</h2>
                    <Iniciais />
                </div>
                <div>
                    <h2>Primum Mysterium Doloris:</h2>
                    <h3>Iesus in horto Gethsémani orat</h3>
                </div>
                <div>
                    <h2>Secundum Mysterium Doloris:</h2>
                    <h3>Iesus flagéllis caeditur</h3>
                </div>
                <div>
                    <h2>Tertium Mysterium Doloris:</h2>
                    <h3>Iesus spinis coronátur</h3>
                </div>
                <div>
                    <h2>Quartum Mysterium Doloris:</h2>
                    <h3>Iesus cruce oneratus Cálvarie locum adit</h3>
                </div>
                <div>
                    <h2>Quintum Mysterium Doloris:</h2>
                    <h3>Iesus in cruce móritur</h3>
                </div>
                <div>
                    <h2>Orações Finais</h2>
                </div>
            </DivOracoes>
        </DivTudo>
    )
}

const DivTudo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%);
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
            font-family: 'Playball';
        }
    }
`

const DivOracoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
    font-family: 'Lexend Deca';
    h2{
        font-family: 'Playball';
        font-size: 25px;
    }
    h3{
        font-size: 16px;
        font-weight: 400;
    }
    >div{
        box-sizing: border-box;
        width: 300px;
        background: #FFFFFF;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`