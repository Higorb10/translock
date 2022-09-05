import Titulo from "./Titulo"

interface CabecalhoProp{
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProp) {
    return (
        <div>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
}