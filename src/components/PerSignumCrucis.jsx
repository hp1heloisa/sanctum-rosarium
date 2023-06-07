import { DivOracaoInd } from "../styled/styles";

export default function SignumCrucis({lingua}){
    if (lingua == 'portugues'){
        return(
            <DivOracaoInd>
                <h1>Pelo Sinal da Santa Cruz</h1>
                <div>
                    <p><span>Pelo</span> sinal da Santa Cruz, livrai-nos Deus, Nosso Senhor, dos nossos inimigos visíveis e invisíveis.</p>
                    <p><span>Em</span> nome do Pai, e do Filho, e do Espírito Santo. </p>
                    <span><p>Amém.</p></span>
                </div>
            </DivOracaoInd>
        )
    } else{
        return(
            <DivOracaoInd>
                <h1>Per Signum Crucis</h1>
                <div>
                    <p><span>Per</span> signum Crucis de inimícis nostris líbera nos, Deus noster.</p>
                    <p><span>In</span> nómine Patris, et Fílii, et Spíritus Sancti. </p>
                    <span><p>Ámen.</p></span>
                </div>
            </DivOracaoInd>
        )
    }
}