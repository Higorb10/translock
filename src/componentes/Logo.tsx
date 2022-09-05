import React from "react"
import logo from '../componentes.logo.jpeg'

export default function Logo(){
    return(
        <div className={`flex flex-col items-center justify-center h-20 w-20 rounded-full bg-white`}>
            <img src={'logo.jpeg'}/>
        </div>
    )
}