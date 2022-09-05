import Layout from "../componentes/Layout";

export default function Carro() {
  return (
    <div>
        <Layout titulo="Ana Catarina" subtitulo="">
        <p>
          Carro: Karmann Ghia <br></br>
          Endereço: R: Casarão Amanha, Nº754, Sô Ninho<br></br>
          Telefone: (85) 9 1542-8451
          </p>
          <div className={`w-full md:w-1/4 bg-gray-100 text-black text-center rounded-lg px-1 py-4 pt-4 mt-5`}>
            <strong>DJR-4335</strong>
          </div>
          <button className={`w-full md:w-1/4 bg-green-600 hover:bg-green-400
            text-white rounded-lg px-1 py-4 pt-4 mt-5`}>Rastrear</button>
        

<div className={`px-left bg-white float-right rounded-lg px-60 py- pt-80 mt-00`}>
            <a href="https://www.google.com.br/maps/@-20.512768,-47.3923584,13z"></a>
            Mapa
        </div>

        
        </Layout>
        <div>
            
        </div>
    </div>
  )
}