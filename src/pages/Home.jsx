import { Link } from 'react-router-dom';
import styled from 'styled-components';
import terco from '../assets/rosary.png';
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
            <DivMisterio>
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
            </DivMisterio>
        </DivGeral>
    )
}

const DivGeral = styled.div`
    background: #4682B4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Playball';
    padding-top: 10px;
    padding-bottom: 20px;
    >div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 150px;
        }
        h1{
            font-size: 40px;
            color: white;
        }
    }
`

const DivMisterio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-size: 25px;
        color: white;
        width: 100%;
        height: 40px;
        border-radius: 5px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%);
    }
    div{
        width: 300px;
        height: 120px;
        border-radius: 5px;
        display: flex; 
        align-items: end;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    }
     >div:nth-child(1){
        background-image: url(${nascimento});
        background-size: cover;
        background-position: center bottom;
    }
    >div:nth-child(2){
        background-image: url(${ceia});
        background-size: cover;
        background-position: center top;
    }
    >div:nth-child(3){
        background-image: url(${lacrimosa});
        background-size: cover;
        background-position: center top;
    }
    >div:nth-child(4){
        background-image: url(${ressureicao});
        background-size: cover;
        background-position: center center;
    }
`