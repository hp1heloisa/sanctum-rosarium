import { useState } from "react";
import styled from "styled-components"
import ressurreicao from "../assets/ressureciao.jpg"
import Iniciais from "../components/Iniciais";
import OracaoMisterio from '../components/OracaoMisterio';
import Finais from '../components/Finais';
import { DivOracoes, Container, DivTradu } from "../styled/styles";
import primeiro from '../assets/primeiroglorioso.jpg';
import segundo from '../assets/segundoglorioso.jpg';
import terceiro from '../assets/terceiroglorioso.jpg';
import quarto from '../assets/quartoglorioso.jpg';
import quinto from '../assets/quintoglorioso.webp';

export default function MysteriaGloriae(){
    const [estado, setEstado] = useState(['none','none','none','none','none','none','none']);
    const [lingua, setLingua] = useState(['latim','latim','latim','latim','latim','latim','latim']);
    const imagens = [primeiro, segundo, terceiro, quarto, quinto];
    const numeroMisterio = ['Primum Mysterium Gloriosum:','Secundum Mysterium Gloriosum:','Tertium Mysterium Gloriosum:',
                            'Quartum Mysterium Gloriosum:','Quintum Mysterium Gloriosum:'];
    const numeroMisterioPort = ['Primeiro Mistério Glorioso:', 'Segundo Mistério Glorioso:', 'Terceiro Mistério Glorioso:',
                                'Quarto Mistério Glorioso:', 'Quinto Mistério Glorioso:']
    const misteriosPortugues = ['A Ressurreição de Cristo', 'A Ascenção do Senhor aos Céus', 'A Vinda do Espírito Santo', 
                                'A Assunção de Nossa Senhora', 'A Coroação de Maria Santíssima'];
    const misteriosLatim = ['Iesus a mórtuis resúrgit','Iesus caelos ad Patris glóriam ascéndi','Spíritus Paráclitus supra discípulos descéndit',
                            'Maria Virgo in caelum assúmpta est','Maria Virgo in caelum regína coronátur'];

    function mudaEstado(i){
        const novoEstado = [...estado];
        if (novoEstado[i] == 'flex'){
            novoEstado[i] = 'none';
        } else{
            novoEstado[i] = 'flex';
        }
        setEstado(novoEstado);
    }

    function mudaLingua(i){
        const novaLingua = [...lingua];
        if (novaLingua[i] == 'portugues'){
            novaLingua[i] = 'latim';
        } else{
            novaLingua[i] = 'portugues';
        }
        setLingua(novaLingua);
    }

    return(
        <DivTudo>
            <div>
                <h1>Mysteria Gloriae</h1>
            </div>
            <DivOracoes>
                <DivTradu estado={estado[0]}>
                    <Container onClick={() => mudaEstado(0)}>
                        <h2>Orações Iniciais</h2>
                        <Iniciais estado={estado[0]} lingua={lingua[0]}/>
                    </Container>
                    <span onClick={() => mudaLingua(0)}>traduzir</span>
                </DivTradu>
                {misteriosLatim.map((misterio, i) => {
                    return(
                        <DivTradu key={i+1} estado={estado[i+1]}>
                            <Container onClick={() => mudaEstado(i+1)}>
                                <div>
                                    <h2>{(lingua[i+1]=='portugues') ? numeroMisterioPort[i] : numeroMisterio[i]}</h2>
                                    <h3>{(lingua[i+1]=='portugues') ? misteriosPortugues[i] : misterio}</h3>
                                </div>
                                <ImgMisterio src={imagens[i]} estado={estado[i+1]} tam={i+1}/>
                                <OracaoMisterio estado={estado[i+1]} lingua={lingua[i+1]}/>
                            </Container>
                            <span onClick={() => mudaLingua(i+1)}>traduzir</span>
                        </DivTradu>
                    )
                })}
                <DivTradu estado={estado[6]}>
                    <Container onClick={() => mudaEstado(6)}>
                        <h2>Orações Finais</h2>
                        <Finais estado={estado[6]} lingua={lingua[6]}/>
                    </Container>
                    <span onClick={() => mudaLingua(6)}>traduzir</span>
                </DivTradu>
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
        z-index: 10;
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

const ImgMisterio = styled.img`
    display: ${props => props.estado};
    width: 50%;
    border-radius: 5px;
`