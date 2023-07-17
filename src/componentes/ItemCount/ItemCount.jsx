import '../ItemCount/ItemCount.scss'




function ItemCount( {alCarro,stock,cantidad,setCantidad}){
   

const sumar=()=>{
    if(cantidad < stock){
    setCantidad(cantidad + 1);}
}
const restar=()=>{
    if(cantidad > 1 ){
    setCantidad(cantidad - 1);}
}

 
return (
<div className="botonContenedor">
    <div className="botonDefinirCantidad">
        <button onClick={sumar} className="botonSumar">+</button>
        <p className="contadorBoton">Cantidad : {cantidad}</p>
        <button onClick={restar} className="botonRestar" >-</button>
    </div>
    <div className="botonAgregar">
        <button onClick={alCarro}>Agregar al carro</button>
    </div>
</div>
);

}

export default ItemCount;