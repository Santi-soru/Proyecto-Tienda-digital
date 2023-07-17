import {createContext ,useState} from "react";

export const caritoContex=createContext()
export const CaritoProvedor= ({children}) =>{

const [carito,setCarito]=useState([])
const[numero,setNumero]=useState(carito.length)
const agregarCarro = (item)=>{
    let carroActual=carito;
    carroActual.push(item)
    setCarito(carroActual)
}

const estaa= (nombre) =>{
    return carito.some((pro) => pro.nombre === nombre)
}
const eliminarTodo= ()=>{
    setCarito([])
    setNumero(0)
}
const eliminar= (nombre)=>{
    let newCarro=carito.filter((el) => el.nombre != nombre)

    let numeroActual=newCarro
    .length
    setCarito(newCarro)
    setNumero(numeroActual)  
}


    return(
        <caritoContex.Provider value={{carito,setCarito,agregarCarro ,estaa,numero,setNumero,eliminarTodo,eliminar}}>
            {children}
        </caritoContex.Provider>
    )
}