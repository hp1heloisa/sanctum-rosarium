import { useState } from "react";
import styled from "styled-components"
import lacrimosa from "../assets/doloroso.jpg"
import Iniciais from "../components/Iniciais";
import Finais from '../components/Finais';
import OracaoMisterio from '../components/OracaoMisterio';
import { DivOracoes, Container, DivTradu } from "../styled/styles";
import primeiro from '../assets/primeirodoloroso.jpg';
import segundo from '../assets/segundodoloroso.jpg';
import terceiro from '../assets/terceirodoloroso.jpg';
import quarto from '../assets/quartodoloroso.jpg';
import quinto from '../assets/quintodoloroso.jpg';

export default function MysteriaDoloris(){
    const [estado, setEstado] = useState(['none','none','none','none','none','none','none']);
    const [lingua, setLingua] = useState(['latim','latim','latim','latim','latim','latim','latim']);
    const imagens = [primeiro, segundo, terceiro, quarto, quinto];
    const numeroMisterio = ['Primum Mysterium Doloris:','Secundum Mysterium Doloris:','Tertium Mysterium Doloris:',
                            'Quartum Mysterium Doloris:','Quintum Mysterium Doloris:'];
    const numeroMisterioPort = ['Primeiro Mistério Doloroso:', 'Segundo Mistério Doloroso:', 'Terceiro Mistério Doloroso:',
                                'Quarto Mistério Doloroso:', 'Quinto Mistério Doloroso:']
    const misteriosPortugues = ['A Agonia de Jesus no Jardim das Oliveiras', 'A Flagelação do Senhor', 'A Coroação de Espinhos',
                                'Jesus a caminho do Calvário e o encontro com sua Mãe', 'A Crucifixão e Morte de Jesus'];
    const misteriosLatim = ['Iesus in horto Gethsémani orat','Iesus flagéllis caeditur','Iesus spinis coronátur',
                            'Iesus cruce oneratus Cálvarie locum adit','Iesus in cruce móritur'];

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
                <h1>Mysteria Doloris</h1>
            </div>
            <DivOracoes>
                <DivTradu estado={estado[0]}>
                    <Container onClick={() => mudaEstado(0)}>
                        <h2>Orações Iniciais</h2>
                        <Iniciais estado={estado[0]} lingua={lingua[0]}/>
                    </Container>
                    <span onClick={() => mudaLingua(0)}>{(lingua[0]=='portugues') ? 'latim' : 'português'}</span>
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
                            <span onClick={() => mudaLingua(i+1)}>{(lingua[i+1]=='portugues') ? 'latim' : 'português'}</span>
                        </DivTradu>
                    )
                })}
                <DivTradu estado={estado[6]}>
                    <Container onClick={() => mudaEstado(6)}>
                        <h2>Orações Finais</h2>
                        <Finais estado={estado[6]} lingua={lingua[6]}/>
                    </Container>
                    <span onClick={() => mudaLingua(6)}>{(lingua[6]=='portugues') ? 'latim' : 'português'}</span>
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
        background-image: url(${lacrimosa});
        background-size: cover;
        background-position: center top;
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
    width: ${props => (props.tam == 3 || props.tam == 5) ? '50%' : '100%'};
    border-radius: 5px;
`