import { useState } from "react"


export function useOperaciones({init,stock}){
    
   
const[contador, setContador]=useState(init)

const sumar=()=>{
    if(contador < stock){
    setContador(contador + 1);}
}
const restar=()=>{
    if(contador > 0 ){
    setContador(contador - 1);}
}

    return{ sumar,restar,contador}
}