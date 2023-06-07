import styled from "styled-components"

export default function Gloria() {
    return(
        <DivGloria>
            <h1>Glória</h1>
            <div>
                <p>Glória Patri, et Fílio, et Spirítui Sancto.</p>
                <span>
                    <p>Sicut erat in princípio, et nunc, et semper, et in sáecula saeculórum. </p>
                    <p>Ámen.</p>
                </span>
            </div>
        </DivGloria>
    )
}

const DivGloria = styled.div`
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