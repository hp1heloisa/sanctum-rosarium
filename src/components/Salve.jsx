import { DivOracaoInd } from "../styled/styles";

export default function Salve({lingua}){
    
    if (lingua == 'portugues'){
        return(
            <DivOracaoInd>
                <h1>Salve Rainha</h1>
                <div>
                    <p>
                        <span>Salve,</span> Rainha, Mãe de misericórdia, vida, doçura, esperança nossa, salve!
                        A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale
                        de lágrimas.
                    </p>
                    <p>
                        <span>Eia,</span> pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei,
                        e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa,
                        ó doce sempre Virgem Maria.
                    </p>
                </div>
            </DivOracaoInd>
        )
    }else{
        return(
            <DivOracaoInd>
                <h1>Salve Regina</h1>
                <div>
                    <p>
                        <span>Salve,</span> Regína, mater misericórdiae, vita, dulcédo,
                        et spes nostra, salve. Ad te clamámus éxsules fílii Evae. 
                        Ad te suspirámus, geméntes et flentes in hac lacrimárum valle. 
                    </p>
                    <p>
                        <span>Eia,</span> ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convérte. 
                        Et Iesum, benedíctum fructum ventris tui, nobis post hoc exsílium osténde. 
                        O clémens, o pía, o dulcis Virgo María.
                    </p>
                </div>
            </DivOracaoInd>
        )
    }
}