import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../utiles/firebase"

export function useData(){
    const[productos, setProductos]=useState([])
    const[cargando, setCargando]=useState(false)

    useEffect(()=>{
       
        const refProductos=collection(db, 'productos')
        getDocs(refProductos) 
            .then((rest)=>{
                let newLista= rest.docs.map((doc)=> doc.data())
                setProductos(newLista)
                setCargando(true)

            })
        
    },[])
    return{
        productos,cargando
    }
}