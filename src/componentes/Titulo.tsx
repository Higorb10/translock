interface TituloProps{
    titulo: string
    subtitulo: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div>
            <h1 className={`font-black text-3xl`}>
                {props.titulo}
            </h1>
           
        </div>
    )
}