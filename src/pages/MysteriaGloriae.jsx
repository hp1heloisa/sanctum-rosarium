import { useState } from "react";
import styled from "styled-components"
import ressurreicao from "../assets/ressureciao.jpg"
import Iniciais from "../components/Iniciais";
import OracaoMisterio from '../components/OracaoMisterio';
import Finais from '../components/Finais';
import { DivOracoes } from "../styled/styles";

export default function MysteriaGloriae(){
    const [estado, setEstado] = useState(['none','none','none','none','none','none','none'])

    function mudaEstado(i){
        const novoEstado = [...estado];
        if (novoEstado[i] == 'flex'){
            novoEstado[i] = 'none';
        } else{
            novoEstado[i] = 'flex';
        }
        setEstado(novoEstado);
    }

    return(
        <DivTudo>
            <div>
                <h1>Mysteria Gloriae</h1>
            </div>
            <DivOracoes>
                <div onClick={() => mudaEstado(0)}>
                    <h2>Orações Iniciais</h2>
                    <Iniciais estado={estado[0]} />
                </div>
                <div onClick={() => mudaEstado(1)}>
                    <div>
                        <h2>Primum Mysterium Gloriosum:</h2>
                        <h3>Iesus a mórtuis resúrgit</h3>
                    </div>
                    <OracaoMisterio estado={estado[1]}/>
                </div>
                <div onClick={() => mudaEstado(2)}>
                    <div>
                        <h2>Secundum Mysterium Gloriosum:</h2>
                        <h3>Iesus caelos ad Patris glóriam ascéndi</h3>
                    </div>
                    <OracaoMisterio estado={estado[2]}/>
                </div>
                <div onClick={() => mudaEstado(3)}>
                    <div>
                        <h2>Tertium Mysterium Gloriosum:</h2>
                        <h3>Spíritus Paráclitus supra discípulos descéndit</h3>
                    </div>
                    <OracaoMisterio estado={estado[3]}/>
                </div>
                <div onClick={() => mudaEstado(4)}>
                    <div>
                        <h2>Quartum Mysterium Gloriosum:</h2>
                        <h3>Maria Virgo in caelum assúmpta est</h3>
                    </div>
                    <OracaoMisterio estado={estado[4]}/>
                </div>
                <div onClick={() => mudaEstado(5)}>
                    <div>
                        <h2>Quintum Mysterium Gloriosum:</h2>
                        <h3>Maria Virgo in caelum regína coronátur</h3>
                    </div>
                    <OracaoMisterio estado={estado[5]}/>
                </div>
                <div onClick={() => mudaEstado(6)}>
                    <h2>Orações Finais</h2>
                    <Finais estado={estado[6]}/>
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
    padding-top: 170px;
    >div:nth-child(1){
        background-image: url(${ressurreicao});
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 150px;
        display: flex; 
        align-items: end;
        justify-content: center;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        position: fixed;
        top: 0;
        left: 0;
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

