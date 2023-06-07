import styled from "styled-components"

export default function PaiNosso(){
    return(
        <DivPater>
            <h1>Pater Noster</h1>
            <div>
                <p>Pater noster, qui es in caelis,</p>
                <p>sanctificétur nomen tuum;</p>
                <p>advéniat regnum tuum;</p>
                <p>fiat volúntas tua, sicut in caelo et in terra.  </p>
                <span>
                    <p>Panem nostrum cotidiánum da nobis hódie, </p>
                    <p>et dimítte nobis débita nostra</p>
                    <p>sicut et nos dimíttimus debitóribus nostris. </p>
                    <p>Et ne nos indúcas in tentatiónem, sed libera nos a malo. </p>
                    <p>Ámen.</p>
                </span>
            </div>
        </DivPater>
    )
}

const DivPater = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        font-family: 'Playball';
        font-size: 23px;
        text-align: center;
    }
    div{
        display: flex;
        flex-direction: column;
    }
    p{
        font-family: 'Lexend Deca';
        font-size: 15px;
    }
    span{
        font-weight: 600;
    }
`
