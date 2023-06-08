import { DivOracaoInd } from "../../styled/styles";

export default function Gloria({lingua}) {
    if (lingua == 'portugues'){
        return(
            <DivOracaoInd>
                <h1>Glória</h1>
                <div>
                    <p>Glória ao Pai, ao Filho, e ao Espírito Santo.</p>
                    <span>
                        <p>[Assim] como era no princípio, agora e sempre, [por todos os séculos dos séculos].</p>
                        <p>Amém.</p>
                    </span>
                </div>
            </DivOracaoInd>
        )
    } else{
        return(
            <DivOracaoInd>
                <h1>Glória</h1>
                <div>
                    <p>Glória Patri, et Fílio, et Spirítui Sancto.</p>
                    <span>
                        <p>Sicut erat in princípio, et nunc, et semper, et in sáecula saeculórum. </p>
                        <p>Ámen.</p>
                    </span>
                </div>
            </DivOracaoInd>
        )
    }
}
