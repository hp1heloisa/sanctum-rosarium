import { DivOracaoInd } from "../../styled/styles";

export default function MiIesu({lingua}){

    if (lingua == 'portugues'){
        return(
            <DivOracaoInd>
                <h1>Oração de Fátima</h1>
                <div>
                    <p>V. Ó meu Jesus, perdoai-nos, livrai-nos dos fogo do inferno.</p>
                    <span>
                        <p>R. Levai as almas todas para o Céu e socorrei principalmente as que mais precisarem.</p>
                    </span>
                </div>
            </DivOracaoInd>
        )
    } else{
        return(
            <DivOracaoInd>
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
            </DivOracaoInd>
        )
    }
}
