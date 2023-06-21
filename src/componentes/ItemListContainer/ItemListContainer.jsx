import './ItemLis.scss'
import ItemList from '../ItemList/ItemList';
import { useData } from '../Hooks/useData';
import { useParams } from 'react-router-dom';



function ItemListContainer({Greet , Greet2}){

    let lista=[];
    const{productos}=useData()
    let{tecnologia}=useParams()

    console.log(tecnologia)   

    if(!tecnologia){
        lista=productos;
    } else{
        lista=productos.filter((pro)=>pro.categoria === tecnologia)
    }
    
    return(
        <div className="itemContainer">
            <div className='itemH2'>
                <h2 className='itemTituloPrincipal' > Item List Container</h2>
            </div>
            <div className='contenedorContenido'>
                <h3 className='itemTitulo'>{Greet}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime architecto totam molestiae tenetur voluptate iure consequuntur ipsum error, tempore quam assumenda laborum praesentium natus.</p>
            
                <h3 className='itemTitulo'>{Greet2}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed eius cupiditate quis! Quasi, praesentium nihil. Quia laudantium incidunt cumque quo dolore consequatur molestiae quod?</p>
            </div>
            <div className='precentacionProductos'>
                <ItemList lista={lista}/>
            </div>
        </div>
    )

}

export default ItemListContainer;