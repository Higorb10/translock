
import { iconeAjuste, iconeCad, iconeCasa, iconeExit } from "./icons/index";
import Logo from "./Logo";
import Menuitem from "./Menuitem";

export default function MenuLateral(){
    return(
        <aside>
            <div className={`flex flex-col items-center justify-center bg-gradient-to-r from-green-600 to-green-300 h-20 w-20`}>
                <Logo/>
            </div>
            <ul>
                <Menuitem url="/"texto="Inicio" icone={iconeCasa}/>
                <Menuitem url="Bike1"texto="Bike 1" icone={iconeCad}/>
                <Menuitem url="Carro"texto="Carro" icone={iconeCad}/>
                <Menuitem url="Moto"texto="Moto" icone={iconeCad}/>
                <Menuitem url="Bike2"texto="Bike 2" icone={iconeCad}/>
                <Menuitem url="ajustes"texto="Ajustes" icone={iconeAjuste}/>
                <Menuitem url="Autenticacao"texto="Exit" icone={iconeExit}/>

            </ul>
        </aside>
    )
}