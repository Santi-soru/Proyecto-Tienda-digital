import { useContext } from "react"
import userContex from "../contexto/userContex"
export const CargandoContenido=()=>{
    const{newUser}=useContext(userContex)

    return(
        <div>
            <h1>Ten algo de pasiencia {newUser}</h1>
        </div>
    )
}