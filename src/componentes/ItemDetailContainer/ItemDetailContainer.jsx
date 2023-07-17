


import { useParams } from "react-router-dom";
import { useData } from "../Hooks/useData";
import ItemDetail from "../ItemDetail/ItemDetail";
import { CargandoContenido } from "../cargando/cargandoContenido";
import '../ItemDetailContainer/ItemDetailContainer.scss'





function ItemDetailContainer( ){
    
    const{productos}=useData()
    let{producto}=useParams()
    
     let unPro=productos.find((el)=>el.nombre == producto);
    
    
   
    return(
        <div>
            <h3 className="detailH3">Caracteristicas</h3>
          
            {(!unPro)?<CargandoContenido/>:<ItemDetail nombre={unPro.nombre} descripcion={unPro.descripcion} precio={unPro.precio} categoria={unPro.categoria} stock={unPro.stock} id={unPro.id} imagen={unPro.url}/> }
        </div>
    )
}

export default ItemDetailContainer;