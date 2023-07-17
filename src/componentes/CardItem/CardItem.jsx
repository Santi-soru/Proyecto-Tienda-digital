import { useContext } from "react"
import { caritoContex } from "../contexto/caritoProvedor"
import'../CardItem/CardItem.scss'


export function CardItem({nombre,cantidad,categoria,precio,imagen,id}){

const{eliminar}=useContext(caritoContex)

    return(
        <div className="cardContenedor" key={id}>
            <div className="cardImagen">
                <img src={imagen} alt="" />
            </div>
            <div className="cardInfo">
                <h3>{nombre}</h3>
                <p>{categoria}</p>
                <p>Categoria: {cantidad}</p>
                <p>Valor: ${precio}</p>
                <button className="botonTerminar" onClick={()=>eliminar(nombre)}>Eliminar</button>
            </div>
        </div>
    )
}