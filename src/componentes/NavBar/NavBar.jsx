import './narBar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export let NavBar = () =>{


    return(
        <nav className="Nav">
            <div className='navContenedor'>
              
              <div className='navLista'>
                
                <Link className='navLink' to='/'>Inicio</Link>
                <Link className='navLink' to='/pros/Filamentes (FDM)'>Tegnologia DFM</Link>
                <Link className='navLink' to='/pros/Resina (LCA)'>Imprecion LCA</Link>
              </div>
              <CartWidget/>
            </div>
        </nav>
    )
}