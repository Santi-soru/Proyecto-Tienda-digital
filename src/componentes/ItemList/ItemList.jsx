import Item from "../Item/Item";
import '../Item/Item.scss'


function ItemList( {lista}){
   
    
    
    return(
        <div>
            <h2 className="listH2">Disponibles ahora:</h2>
                <div className="contenedorItems">
                {lista.map((producto)=> <Item id={producto.id} key={producto.id} nombre={producto.nombre} 
                precio={producto.precio}  categoria={producto.categoria} imagen={producto.url}/>
                ) }
                </div>
        </div>
    )

   
}

export default ItemList;