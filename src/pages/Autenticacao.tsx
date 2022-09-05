import { useState } from "react";
import router, { Router, useRouter } from "../../node_modules/next/router";
import AutInput from "../componentes/Autinput";


export default function Autenticacao(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    return (
    <div className="flex items-center justify-center h-screen">
        <div className="hidden md:block md:w1/2 lg:w-2/3">
            <img src={"logo.jpeg"}
                alt="Imgem da tela de autenticação"
                className="h-screen w-full"/>    
        </div>

        <div className="m-10 w-full md:w-1/2 lg:w-1/3">
            <AutInput 
                label="email"
                tipo="email"
                valor={email}
                valorMudou={setEmail}/>

            <AutInput 
                    label="senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}/>

            <button onClick={()=>router.push("/")} className={`w-full bg-green-600 hover:bg-green-300
            text-white rounded-lg px-4 py3 pt-3 mt-6`}>
                Entrar
            </button>
        </div>
    </div>
    )
}