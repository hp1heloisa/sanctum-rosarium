import { DivOracaoInd } from "../styled/styles";

export default function PaiNosso({lingua}){
    if (lingua == 'portugues'){
        return(
            <DivOracaoInd>
                <h1>Pai Nosso</h1>
                <div>
                    <p>Pai nosso que estais nos céus,</p>
                    <p>santificado seja o vosso nome;</p>
                    <p>venha a nós o vosso reino,</p>
                    <p>seja feita a vossa vontade assim na terra como no céu.</p>
                    <span>
                        <p>O pão nosso de cada dia dos dai hoje; </p>
                        <p>perdoai-nos as nossas ofensas,</p>
                        <p>assim como nós perdoamos a quem nos tem ofendido, </p>
                        <p>e não nos deixeis cair em tentação, mas livrai-nos do mal.</p>
                        <p>Amém.</p>
                    </span>
                </div>
            </DivOracaoInd>
        )
    } else{
        return(
            <DivOracaoInd>
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
            </DivOracaoInd>
        )
    }
}

