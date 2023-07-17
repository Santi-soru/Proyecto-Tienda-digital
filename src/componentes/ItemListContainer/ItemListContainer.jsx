import './ItemLis.scss'
import ItemList from '../ItemList/ItemList';
import { useData } from '../Hooks/useData';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CargandoContenido } from '../cargando/cargandoContenido';


function ItemListContainer({Greet , Greet2}){

    const[lista, setLista]=useState([])
    
    const{productos,cargando}=useData()
    let{tecnologia}=useParams()

    
useEffect(()=>{
        if(!tecnologia){
            setLista(productos)
        } else{
            setLista(productos.filter((pro)=>pro.categoria === tecnologia))
        };
        
},[tecnologia,cargando])
    
    
    return(
        <div className="itemContainer">
            <div className='itemH2'>
                <h2 className='itemTituloPrincipal' >!Bienvenido saludos!</h2>
            </div>
            <div className='contenedorContenido'>
                <h3 className='itemTitulo'>{Greet}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime architecto totam molestiae tenetur voluptate iure consequuntur ipsum error, tempore quam assumenda laborum praesentium natus.</p>
            
                <h3 className='itemTitulo'>{Greet2}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed eius cupiditate quis! Quasi, praesentium nihil. Quia laudantium incidunt cumque quo dolore consequatur molestiae quod?</p>
            </div>
            <div className='precentacionProductos'>
                {
                    cargando?<ItemList lista={lista}/>: <CargandoContenido/>
                }
                
            </div>
        </div>
    )

}

export default ItemListContainer;