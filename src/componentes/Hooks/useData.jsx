import { useEffect, useState } from "react"
import PedirData from "../../utiles/PedirData"

export function useData(){
    const[productos, setProductos]=useState([])

    useEffect(()=>{
        PedirData().then((resulta)=>{ setProductos(resulta)});
    },[])
    return{
        productos
    }
}