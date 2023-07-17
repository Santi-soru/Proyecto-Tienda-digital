import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import '../ItemDetail/ItemDetail.scss'
import { caritoContex } from "../contexto/caritoProvedor";

function ItemDetail({nombre,categoria,precio,descripcion,stock,id,imagen}){
    const{carito,agregarCarro,estaa,setNumero}=useContext(caritoContex)
    const[cantidad,setCantidad]=useState(1)
    const[enElCarro,setEnelcarro]=useState(estaa(nombre))
    
    const addCarro=() =>{
        let item={
            id:id,
        nombre:nombre,
        categoria:categoria,
        precio:precio,
        cantidad:cantidad,
        url:imagen
        
    }   
        agregarCarro(item)
        console.log(carito);
        
        setEnelcarro(estaa(nombre))
        setNumero(carito.length)
     }    
    
     
   
    return(
        <div className="padre">
        <div className="detailContenedor">
            <div className="detailImagen">
                <img src={imagen} alt="imagen de impresora" />
            </div>
            <div className="detailInfo">
                 <h2>{nombre}</h2>
                 <p className="detailCategoria">Categoria: {categoria}</p>
                 <p className="detailPrecio">Precio: ${precio}</p>
                 {enElCarro?
                 <button ><Link className="botonTerminar" to='/card'>Confirmar Compra</Link></button>:
                 <ItemCount stock={stock} cantidad={cantidad} setCantidad={setCantidad} alCarro={addCarro}/>}
            </div>
        </div>
            <div className="detailData">
                <h3 className="detailH3">Aserca del producto:</h3>
                
                <p className="detailDescripcion"> {descripcion}</p>
            </div>
        
        </div>
    )
}
export default ItemDetail;