


import { useData } from "../Hooks/useData";
import ItemDetail from "../ItemDetail/ItemDetail";




function ItemDetailContainer( ){
    const{productos}=useData()
    
   let dato=localStorage.getItem('dato')
   let unPro=productos.find((pro)=>pro.nombre === dato)
   console.log(productos)
   
    return(
        <div>
            <h3>Caracteristicas</h3>
          
            <ItemDetail ket={unPro.id} nombre={unPro.nombre} categoria={unPro.categoria} precio={unPro.precio} descripcion={unPro.descripcion} />

        </div>
    )
}

export default ItemDetailContainer;