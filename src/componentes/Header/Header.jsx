import { NavBar } from "../NavBar/NavBar";
import './header.scss'


function Header(){

    return(
        <header className="headerContenedor" > 
            <div className="headerTitulo">
                <img src="imgenes improsoras\inoco logo.png" alt="" />
                <h1>Todo Equipos-3D</h1>
                
            </div>
                <NavBar/>
        </header>
    )
};
export default Header;