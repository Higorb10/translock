import Layout from "../componentes/Layout";

export default function Ajustes(){
    return(
        <Layout titulo="Ajustes" subtitulo="Gereciar configuracoes">

            <div className='px-100 justfy-center'>
                <div>
                    <button className={` w-full md:w-1/4 bg-green-600 hover:bg-green-400
                    text-white rounded-lg px-1 py-4 pt-4 mt-5`}>Configuração de Usuário</button>

                    <button className={`w-full md:w-1/4 bg-green-600 hover:bg-green-400
                     text-white rounded-lg px-1 py-4 pt-4 mt-5`}>Cadastrar Novo Usuario</button>

                    <button className={`w-full md:w-1/4 bg-green-600 hover:bg-green-400
                        text-white rounded-lg px-1 py-4 pt-4 mt-5`}>Segurança</button>

                    <button className={`w-full md:w-1/4 bg-green-600 hover:bg-green-400
                        text-white rounded-lg px-1 py-4 pt-4 mt-5`}>Remover Acesso</button>
                </div>

            </div>
        </Layout>
    )
}