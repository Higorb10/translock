import Layout from "../componentes/Layout";

export default function Bike2() {
  return (
    <div>
       <Layout titulo="Maria Jane" subtitulo="">
        <p>
          Bicicleta Venzo <br></br>
          Endereço: R: Paulo Quinho, Nº666, Vale Humanota<br></br>
          Telefone: (85) 9 4247-9751
          </p>
          
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