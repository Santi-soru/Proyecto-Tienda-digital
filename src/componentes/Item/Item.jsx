import ItemCount from "../ItemCount/ItemCount";
import '../Item/Item.scss'
import { Link } from "react-router-dom";
function Item({ nombre, precio, categoria,id }) {

    function verDetalle(){
        localStorage.setItem('dato',nombre);
    }

    return (
        <div className="itemContenedor">
            
            <h2 className="itemTitulo">{nombre}</h2>
           
            <p className="itemCategoria">Tipo: {categoria}</p>
            <p className="itemPrecio">${precio}</p>
            <button className="itemLink" onClick={verDetalle} > <Link to='/detalle/produc'>Mas Informacion</Link></button>
           
        </div>
    )
}
export default Item;