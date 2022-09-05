import Layout from "../componentes/Layout";

export default function Bike1() {
  return (
    <div>
        <Layout titulo="Cleitinho" subtitulo="Cleitinho">
          <p>
          Bicicleta: Gallo Branca<br></br>
          Endereço: R: Konto Vento, Nº830, Aldeia da Folha<br></br>
          Telefone: (70) 97787-1939
          </p>
          <button className={`w-full md:w-1/4 bg-green-600 hover:bg-green-400
            text-white rounded-lg px-1 py-4 pt-4 mt-5`}>Rastrear</button>
        

<div className={`px-left bg-white float-right rounded-lg px-60 py-60 pt-40 mt-6`}>
            Mapa
        </div>

        </Layout>
        
    </div>
  )
}