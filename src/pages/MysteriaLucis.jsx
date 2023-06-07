import { useState } from "react"
import styled from "styled-components"
import ceia from "../assets/ultimaceia.jpg"
import Iniciais from "../components/Iniciais"

export default function MysteriaLucis(){
    const [estado, setEstado] = useState(['none','none','none','none','none','none','none'])

    function mudaEstado(i){
        const novoEstado = [...estado];
        if (novoEstado[i] == 'flex'){
            novoEstado[i] = 'none';
        } else{
            novoEstado[i] = 'flex';
        }
        setEstado(novoEstado);
        console.log(estado)
    }


    return(
        <DivTudo>
            <div>
                <h1>Mysteria Lucis</h1>
            </div>
            <DivOracoes>
                <div onClick={() => mudaEstado(0)}>
                    <h2>Orações Iniciais</h2>
                    <Iniciais estado={estado[0]} />
                </div>
                <div onClick={() => mudaEstado(1)}>
                    <div>
                        <h2>Primum Mysterium Lucis:</h2>
                        <h3>Iesus in Iordáne baptizátur</h3>
                    </div>
                </div>
                <div onClick={() => mudaEstado(2)}>
                    <div>
                        <h2>Secundum Mysterium Lucis:</h2>
                        <h3>Iesus apud Canénse Matrimónium se autorevélat</h3>
                    </div>
                </div>
                <div onClick={() => mudaEstado(3)}>
                    <div>
                        <h2>Tertium Mysterium Lucis:</h2>
                        <h3>Iesus regnum Dei proclámat et ad conversiónem invítat</h3>
                    </div>
                </div>
                <div onClick={() => mudaEstado(4)}>
                    <div>
                        <h2>Quartum Mysterium Lucis</h2>
                        <h3>Iesus in monte transfigurátur</h3>
                    </div>
                </div>
                <div onClick={() => mudaEstado(5)}>
                    <div>
                        <h2>Quintum Mysterium Lucis</h2>
                        <h3>Iesus Eucharístiam instítuir</h3>
                    </div>
                </div>
                <div onClick={() => mudaEstado(6)}>
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
    background-color: #4682B4;
    >div:nth-child(1){
        background-image: url(${ceia});
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
        gap: 10px;
    }
`

