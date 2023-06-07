import styled from "styled-components"

export default function MiIesu(){
    return(
        <DivFatima>
            <h1>Orátio Fátimae</h1>
            <div>
                <p>O mi Iesu,</p>
                <p>dimítte nobis débita nostra, </p>
                <p>líbera nos ab igne inférni. </p>
                <span>
                    <p>Duc in caelum omnes ánimas, </p>
                    <p>praesértim illas quae máxime índigent misericórdia tua. </p>
                </span>
            </div>
        </DivFatima>
    )
}

const DivFatima = styled.div`
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