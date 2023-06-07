import { DivOracaoInd } from "../styled/styles";


export default function AveMAria({vezes}){
    return(
        <DivOracaoInd>
            <h1>Ave Maria {vezes}</h1>
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
        </DivOracaoInd>
    )
}
