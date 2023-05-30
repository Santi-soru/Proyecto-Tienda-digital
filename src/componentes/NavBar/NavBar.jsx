import './narBar.scss'
import CartWidget from '../CartWidget/CartWidget'

export let NavBar = () =>{


    return(
        <nav className="Nav">
            <div className='navContenedor'>
              
              <div className='navLista'>
                
                <a href="" className='navLink'>Envios</a>
                <a href="" className='navLink'>Tecnologias</a>
                <a href="" className='navLink'>Nosotros</a>
              </div>
              <CartWidget/>
            </div>
        </nav>
    )
}