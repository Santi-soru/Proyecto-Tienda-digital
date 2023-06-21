import '../ItemCount/ItemCount.scss'
import { useOperaciones } from '../Hooks/useOperaciones';



function ItemCount( propp){
   
const{sumar ,restar,contador}=useOperaciones(propp)

 
return (
<div className="botonContenedor">
    <div className="botonDefinirCantidad">
        <button onClick={sumar} className="botonSumar">+</button>
        <p className="contadorBoton">Cantidad : {contador}</p>
        <button onClick={restar} className="botonRestar" >-</button>
    </div>
    <div className="botonAgregar">
        <button>Agregar al carro</button>
    </div>
</div>
);

}

export default ItemCount;