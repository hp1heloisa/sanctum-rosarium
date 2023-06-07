import styled from "styled-components"

export default function Credo() {
    return(
        <DivCredo>
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
        </DivCredo>
    )
}

const DivCredo = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        font-family: 'Playball';
        font-size: 23px;
        text-align: center;
    }
    div{
        display: flex;
        flex-direction: column;
    }
    p{
        font-family: 'Lexend Deca';
        font-size: 15px;
    }
    span{
        font-weight: 600;
    }
`