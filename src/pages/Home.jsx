import { Link } from 'react-router-dom';
import styled from 'styled-components';
import terco from '../assets/terco.jpg';
import nascimento from '../assets/nascimento.webp';
import ceia from '../assets/ultimaceia.jpg';
import lacrimosa from '../assets/doloroso.jpg';
import ressureicao from '../assets/ressureciao.jpg';

export default function Home(){
    return(
        <DivGeral>
            <div>
                <img src={terco}/>
                <div>
                    <h1>Sanctum</h1>
                    <h1>Rosarium</h1>
                </div>
            </div>
            <div>
                <Link to={"/gaudii"}>Mysteria Gaudii</Link>
            </div>
            <div>
                <Link to={"/lucis"}>Mysteria Lucis</Link>
            </div>
            <div>
                <Link to={"/doloris"}>Mysteria Doloris</Link>
            </div>
            <div>
                <Link to={"/gloriae"}>Mysteria Gloriae</Link>
            </div>
        </DivGeral>
    )
}

const DivGeral = styled.div`
    height: 100vh;
    background-color: #B0E0E6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Playball';
    gap: 10px;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-size: 20px;
        color: white;
        width: 100%;
        height: 30px;
        border-radius: 5px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%);
    }
    >div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 10px;
        img{
            width: 200px;
        }
        h1{
            font-size: 30px;
        }
    }
    >div:nth-child(2){
        background-image: url(${nascimento});
        background-size: cover;
        background-position: center center;
        width: 200px;
        height: 100px;
        border-radius: 5px;
        display: flex; 
        align-items: end;
    }
    >div:nth-child(3){
        background-image: url(${ceia});
        background-size: cover;
        background-position: center center;
        width: 200px;
        height: 100px;
        border-radius: 5px;
        display: flex; 
        align-items: end;
    }
    >div:nth-child(4){
        background-image: url(${lacrimosa});
        background-size: cover;
        background-position: center center;
        width: 200px;
        height: 100px;
        border-radius: 5px;
        display: flex; 
        align-items: end;
    }
    >div:nth-child(5){
        background-image: url(${ressureicao});
        background-size: cover;
        background-position: center center;
        width: 200px;
        height: 100px;
        border-radius: 5px;
        display: flex; 
        align-items: end;
    }
`