import { useContext } from "react";
import { caritoContex } from "../contexto/caritoProvedor";
import userContex from "../contexto/userContex";
import { Link } from "react-router-dom";
import { CardItem } from "../CardItem/CardItem";
import '../CardConteiner/CardConteiner.scss'

function CardConteiner(){

    const{carito,eliminarTodo}=useContext(caritoContex)
    const newUser=useContext(userContex)
    console.log(carito)
    
    if(carito.length === 0){
        return(
            <div>
                <h2>{newUser}</h2>
                <p>Tu carrito esta vacio, clikea el boton para ver nuestros productos</p>
                <button><Link to='/'>Ver catalogos</Link></button>
            </div>
        )
    }

    return(
    <div className="cardContenedorPadre">
        
        <h2>Este es tu carrito --- {newUser}</h2>
        {carito.map((pro)=> <CardItem nombre={pro.nombre} cantidad={pro.cantidad} categoria={pro.categoria} precio={pro.precio} imagen={pro.url}/>
            )}
        <br />
        <div className="botonesContenedor">
            <button className="botonTerminar" onClick={eliminarTodo}>Vaciar carro</button>
            <button><Link className="botonCompra" to='/checkout' >Terminar mi compra </Link></button>
        </div>
    </div>
    )
}
export default CardConteiner;