import { useContext, useEffect, useState } from "react"
import './CartWidget.scss'
import { caritoContex } from "../contexto/caritoProvedor"
import { Link } from "react-router-dom"
const CartWidget = () =>{
    const{numero}=useContext(caritoContex)
    

    return(
        <div className="bolsaContenedor"> 
            <Link to='/card'><img src="imgenes improsoras\icono bolsa.png" alt="" className="bolsaCompras"  /><span className="numeroRandom" >{numero}</span> </Link>
        </div>
    )

}

export default CartWidget