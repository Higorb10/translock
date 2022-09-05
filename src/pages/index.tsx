import { useState } from "react";
import Layout from "../componentes/Layout";

export default function Home() {
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [veiculo, setVeiculo] = useState('')
  const [celular, setCelular] = useState('')

  return (
    <div>
        <Layout titulo="TRANSLOCK Service" subtitulo="Estamos criando um template admin">
          <p>
            Central de grenciamento de veiculos e utilitários.
          </p>
          
          

          <div className="m-10 w-full md:w-1/2 lg:w-1/2 justify-center rounded-sm">
            Nome<input type="nome" className="m-10 w-full md:w-1/2 lg:w-1/3"/>
           Endereço <input type="endereco" className="alm-10 w-full md:w-1/2 lg:w-1/3" />
            Telefone<input type="veiculo"  className="m-10 w-full md:w-1/2 lg:w-1/3"/>
            Veiculo <input type="celular" className="alm-10 w-full md:w-1/2 lg:w-1/3"/>
        </div>

          <button className={`w-full md:w-1/4 bg-green-600 hover:bg-green-400
            text-white rounded-lg px-1 py-4 pt-4 mt-5`}>Cadastrar</button>
        </Layout>

        
    </div>
  )
}

