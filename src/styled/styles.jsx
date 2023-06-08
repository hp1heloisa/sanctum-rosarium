import styled from "styled-components";

export const DivOracaoInd = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    h1{
        font-family: 'Playball';
        font-size: 22px;
        text-align: center;
    }
    div{
        display: flex;
        flex-direction: column;
    }
    p{
        font-family: 'Nunito';
        font-size: 14px;
    }
    span{
        font-weight: 700;
        font-size: 14px;
    }
`

export const DivOracoes = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
    font-family: 'Nunito';
    width: 100%;
    padding-left: 12.5px;
    padding-right: 12.5px; 
    h2{
        font-family: 'Playball';
        font-size: 25px;
        text-align: center;
    }
    h3{
        font-size: 16px;
        font-weight: 600;
        text-align: center;
    }
    
`

export const Container = styled.div`
        box-sizing: border-box;
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
`

export const DivTradu = styled.div`
position: relative;
width: 100%;
>span{
    display: ${props => props.estado};
    align-items: start;
    justify-content: center;
    font-size: 8px;
    position: absolute;
    top: 0;
    right: 0;
    text-decoration: underline;
    color: blue;
    height: 30px;
    width: 40px;
    padding-top: 5px;
    cursor: pointer;
}
`