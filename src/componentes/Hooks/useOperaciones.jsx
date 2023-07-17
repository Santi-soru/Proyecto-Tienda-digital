import { useState } from "react"


export function useOperaciones({cantidad:contador ,setCantidad}){
    
    let stock=6; 

const sumar=()=>{
    if(contador < stock){
    setCantidad(contador + 1);}
}
const restar=()=>{
    if(contador > 0 ){
    setCantidad(contador - 1);}
}

    return{ sumar,restar,contador}
}