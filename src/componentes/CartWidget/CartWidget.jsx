import { useState } from "react"
import './CartWidget.scss'
const CartWidget = () =>{
   
    const [Harcodeado, setHarcodeado]=useState(0)
  
    function numeroRandom(){
        setHarcodeado(Math.round(Math.random()*20));
        
        
    }

    return(
        <div className="bolsaContenedor"> 
            <button  onClick={numeroRandom}><img src="imgenes improsoras\icono bolsa.png" alt="" className="bolsaCompras"  /><span className="numeroRandom" >{Harcodeado}</span> </button>
        </div>
    )

}

export default CartWidget