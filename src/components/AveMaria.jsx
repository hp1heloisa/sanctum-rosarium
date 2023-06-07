import { DivOracaoInd } from "../styled/styles";


export default function AveMAria({vezes, lingua}){
    if (lingua == 'portugues'){
        return(
            <DivOracaoInd>
                <h1>Ave Maria {vezes}</h1>
                <div>
                    <p>Ave, Maria, cheia de graça, o Senhor é convosco,</p>
                    <p>bendita sois Vós entre as mulheres</p>
                    <p>e bendito é o fruto do Vosso ventre, Jesus.</p>
                    <span>
                        <p>Santa Maria, Mãe de Deus,</p>
                        <p>rogai por nós, pecadores,</p>
                        <p>agora e na hora da nossa morte.</p>
                        <p>Amém.</p>
                    </span>
                </div>
            </DivOracaoInd>
        )
    } else {
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
}
