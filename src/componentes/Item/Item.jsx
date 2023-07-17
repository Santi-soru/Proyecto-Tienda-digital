
import '../Item/Item.scss'
import { Link } from "react-router-dom";
function Item({ nombre, precio, categoria,id,imagen }) {

    function verDetalle(){
        localStorage.setItem('dato',nombre);
    }

    return (
        <div className="itemContenedor"> 
        
            <h2 className="itemTitulo">{nombre}</h2>
            <img className='itemImagen' src={imagen} alt="imgen impresora" />
            <p className="itemCategoria">Tipo: {categoria}</p>
            <p className="itemPrecio">${precio}</p>
            <button className="itemLink" onClick={verDetalle} > <Link to={`/detalle/${nombre}`}>Mas Informacion</Link></button>
           
        </div>
    )
}
export default Item;