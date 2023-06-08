import { useState } from "react";
import styled from "styled-components"
import nascimento from "../assets/nascimento.webp"
import Iniciais from "../components/Iniciais";
import OracaoMisterio from '../components/OracaoMisterio';
import Finais from '../components/Finais';
import { DivOracoes, Container, DivTradu } from "../styled/styles";
import primeiro from '../assets/primeirogaudii.jpg';
import segundo from '../assets/segundogaudii.jpg';
import terceiro from '../assets/terceirogaudii.jpg';
import quarto from '../assets/quartogaudii.jpg';
import quinto from '../assets/quintogaudii.jpg';

export default function MysteriaGaudii(){
    const [estado, setEstado] = useState(['none','none','none','none','none','none','none']);
    const [lingua, setLingua] = useState(['latim','latim','latim','latim','latim','latim','latim']);
    const imagens = [primeiro, segundo, terceiro, quarto, quinto];
    const numeroMisterio = ['Primum Mysterium Gaudii:','Secundum Mysterium Gaudii:','Tertium Mysterium Gaudii:',
                            'Quartum Mysterium Gaudii:','Quintum Mysterium Gaudii:'];
    const numeroMisterioPort = ['Primeiro Mistério Gozoso:', 'Segundo Mistério Gozoso:', 'Terceiro Mistério Gozoso:',
                                'Quarto Mistério Gozoso:', 'Quinto Mistério Gozoso:']
    const misteriosPortugues = ['O Anúncio do Anjo Gabriel a Virgem Maria', 'A Visitação da Virgem Maria à sua prima Santa Isabel',
                                'O Nascimento do Menino Jesus em Belém', 'A Apresentação de Jesus no Templo', 'A Perda e o Encontro do Menino Jesus'];
    const misteriosLatim = ['Angelus Dómini nuntiávit Mariae','María Elísabeth vísitat','Iesus in Béthleem náscitur',
                            'Puer Iesus in templo praesentátur','Puer Iesus in templo invenítur'];

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
                <h1>Mysteria Gaudii</h1>
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
        background-image: url(${nascimento});
        background-size: cover;
        background-position: center bottom;
        width: 100%;
        height: 150px;
        display: flex; 
        align-items: end;
        justify-content: center;
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
