import styled from "styled-components"

export default function AveMAria(){
    return(
        <DivAve>
            <h1>Ave Maria</h1>
            <div>
                <p>Ave María, grátia plena, Dóminus tecum;</p>
                <p>benedícta tu in muliéribus, </p>
                <p>et benedíctus fructus ventris tui, Iesus.</p>
                <span>
                    <p>Sancta María, Mater Dei, </p>
                    <p>ora pro nobis peccatóribus, </p>
                    <p>nunc, et in hora mortis nostrae. </p>
                    <p>Ámen.</p>
                </span>
            </div>
        </DivAve>
    )
}

const DivAve = styled.div`
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