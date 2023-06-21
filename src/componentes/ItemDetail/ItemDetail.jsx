import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({nombre,categoria,precio,descripcion}){
    let stock=6; 
    let init=1;
    return(
        <div>
            <div>
                <img src=''alt="" />
            </div>
            <div>
                 <h2>{nombre}</h2>
                 <p>{precio}</p>
                 <ItemCount stock={stock} init={init}/>
            </div>
            <div>
                <h3>Aserca del producto</h3>
                <p>{categoria}</p>
                <p> {descripcion}</p>
            </div>
        </div>
    )
}
export default ItemDetail;