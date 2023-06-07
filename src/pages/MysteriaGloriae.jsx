import { useState } from "react";
import styled from "styled-components"
import ressurreicao from "../assets/ressureciao.jpg"
import Iniciais from "../components/Iniciais";
import OracaoMisterio from '../components/OracaoMisterio';
import Finais from '../components/Finais';
import { DivOracoes, Container } from "../styled/styles";
import primeiro from '../assets/primeiroglorioso.jpg';
import segundo from '../assets/segundoglorioso.jpg';
import terceiro from '../assets/terceiroglorioso.jpg';
import quarto from '../assets/quartoglorioso.jpg';
import quinto from '../assets/quintoglorioso.webp';

export default function MysteriaGloriae(){
    const [estado, setEstado] = useState(['none','none','none','none','none','none','none']);
    const [lingua, setLingua] = useState(['latim','latim','latim','latim','latim','latim','latim']);

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
                <DivTradu estado={estado[1]}>
                    <Container onClick={() => mudaEstado(1)}>
                        <div>
                            <h2>Primum Mysterium Gloriosum:</h2>
                            <h3>Iesus a mórtuis resúrgit</h3>
                        </div>
                        <ImgMisterio src={primeiro} estado={estado[1]}/>
                        <OracaoMisterio estado={estado[1]} lingua={lingua[1]}/>
                    </Container>
                    <span onClick={() => mudaLingua(1)}>traduzir</span>
                </DivTradu>
                <DivTradu estado={estado[2]}>
                    <Container onClick={() => mudaEstado(2)}>
                        <div>
                            <h2>Secundum Mysterium Gloriosum:</h2>
                            <h3>Iesus caelos ad Patris glóriam ascéndi</h3>
                        </div>
                        <ImgMisterio src={segundo} estado={estado[2]}/>
                        <OracaoMisterio estado={estado[2]} lingua={lingua[2]}/>
                    </Container>
                    <span onClick={() => mudaLingua(2)}>traduzir</span>
                </DivTradu>
                <DivTradu estado={estado[3]}>
                    <Container onClick={() => mudaEstado(3)}>
                        <div>
                            <h2>Tertium Mysterium Gloriosum:</h2>
                            <h3>Spíritus Paráclitus supra discípulos descéndit</h3>
                        </div>
                        <ImgMisterio src={terceiro} estado={estado[3]}/>
                        <OracaoMisterio estado={estado[3]} lingua={lingua[3]}/>
                    </Container>
                    <span onClick={() => mudaLingua(3)}>traduzir</span>
                </DivTradu>
                <DivTradu estado={estado[4]}>
                    <Container onClick={() => mudaEstado(4)}>
                        <div>
                            <h2>Quartum Mysterium Gloriosum:</h2>
                            <h3>Maria Virgo in caelum assúmpta est</h3>
                        </div>
                        <ImgMisterio src={quarto} estado={estado[4]}/>
                        <OracaoMisterio estado={estado[4]} lingua={lingua[4]}/>
                    </Container>
                    <span onClick={() => mudaLingua(4)}>traduzir</span>
                </DivTradu>
                <DivTradu estado={estado[5]}>
                    <Container onClick={() => mudaEstado(5)}>
                        <div>
                            <h2>Quintum Mysterium Gloriosum:</h2>
                            <h3>Maria Virgo in caelum regína coronátur</h3>
                        </div>
                        <ImgMisterio src={quinto} estado={estado[5]}/>
                        <OracaoMisterio estado={estado[5]} lingua={lingua[5]}/>
                    </Container>
                    <span onClick={() => mudaLingua(5)}>traduzir</span>
                </DivTradu>
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

const DivTradu = styled.div`
    position: relative;
    width: 100%;
    >span{
        display: ${props => props.estado};
        font-size: 8px;
        position: absolute;
        top: 5px;
        right: 5px;
        text-decoration: underline;
        color: blue;
    }
`