import { DivOracaoInd } from "../styled/styles";

export default function Credo({lingua}) {
    if (lingua == 'portugues'){
        return(
            <DivOracaoInd>
                <h1>Credo</h1>
                <div>
                    <p><span>Creio</span> em Deus Pai todo-poderoso,</p>
                    <p><span>criador</span> do céu e da terra;</p>
                    <p><span>e</span> em Jesus Cristo, seu único Filho, Nosso Senhor;</p>
                    <p><span>que</span> foi concebido pelo poder do Espírito Santo;</p>
                    <p><span>nasceu</span> da Virgem Maria, </p>
                    <p><span>padeceu</span> sob Pôncio Pilatos, foi crucificado, morto e sepultado;</p>
                    <p><span>desceu</span> a mansão dos mortos; </p>
                    <p><span>ressuscitou</span> ao terceiro dia;</p>
                    <p><span>subiu</span> aos céus, está sentado à direita de Deus Pai todo-poderoso, </p>
                    <p><span>donde</span> há de vir a julgar os vivos e os mortos; </p>
                    <p><span>Creio</span> no Espírito Santo,</p>
                    <p><span>na</span> santa Igreja Católica, </p>
                    <p><span>na</span> comunhão dos santos, </p>
                    <p><span>na</span> remissão dos pecados, </p>
                    <p><span>na</span> ressurreição da carne, </p>
                    <p><span>na</span> vida eterna. </p>
                    <p><span>Amém.</span></p>
                </div>
            </DivOracaoInd>
        )
    } else {
        return(
            <DivOracaoInd>
                <h1>Credo</h1>
                <div>
                    <p><span>Credo</span> in Deum Patrem omnipoténtem,</p>
                    <p><span>Creatórem</span> caeli et terrae.</p>
                    <p><span>Et</span> in Iesum Christum, Fílium eius únicum, Dóminum nostrum,</p>
                    <p><span>qui</span> concéptus est de Spíritu Sancto, </p>
                    <p><span>natus</span> ex María Vírgine, </p>
                    <p><span>passus</span> sub Póntio Piláto, crucifixus, mórtuus, et sepúltus,</p>
                    <p><span>descéndit</span> ad ínferos, </p>
                    <p><span>tértia</span> die resurréxit a mórtuis,</p>
                    <p><span>ascéndit</span> ad caelos, sedet ad déxteram Dei Patris omnipoténtis, </p>
                    <p><span>inde</span> ventúrus est iudicare vivos et mórtuos. </p>
                    <p><span>Credo</span> in Spíritum Sanctum, </p>
                    <p><span>sanctam</span> Ecclésiam cathólicam, </p>
                    <p><span>Sanctórum</span> communiónem, </p>
                    <p><span>remissiónem</span> peccatórum, </p>
                    <p><span>carnis</span> resurrectiónem, </p>
                    <p><span>vitam</span> aetérnam. </p>
                    <p><span>Ámen.</span></p>
                </div>
            </DivOracaoInd>
        )
    }
}
