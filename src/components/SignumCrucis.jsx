import { DivOracaoInd } from "../styled/styles";

export default function SignumCrucis({lingua}){
    if (lingua == 'portugues'){
        return(
            <DivOracaoInd>
                <h1>Sinal da Cruz</h1>
                <div>
                    <p><span>Em</span> nome do Pai, e do Filho, e do Espírito Santo. </p>
                    <span><p>Amém.</p></span>
                </div>
            </DivOracaoInd>
        )
    } else{
        return(
            <DivOracaoInd>
                <h1>Signum Crucis</h1>
                <div>
                    <p><span>In</span> nómine Patris, et Fílii, et Spíritus Sancti. </p>
                    <span><p>Ámen.</p></span>
                </div>
            </DivOracaoInd>
        )
    }
}