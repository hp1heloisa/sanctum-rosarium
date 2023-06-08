import { DivOracaoInd } from "../../styled/styles";

export default function Maria({lingua}){
    if (lingua == 'portugues'){
        return(
            <DivOracaoInd>
                <h1>Oração</h1>
                <div>
                    <p>V. Ó Maria, concebida sem pecado.</p>
                    <p><span>R. Rogai por nós, que recorremos a Vós.</span></p>
                </div>
            </DivOracaoInd>
        )
    } else{
        return(
            <DivOracaoInd>
                <h1>Orátio</h1>
                <div>
                    <p>Maria concépta sine peccáto,</p>
                    <p><span>ora pro nobis qui ad te confúgimus.</span></p>
                </div>
            </DivOracaoInd>
        )
    }
}