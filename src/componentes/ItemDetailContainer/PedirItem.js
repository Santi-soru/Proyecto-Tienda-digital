import ListaProductos from "../../utiles/ListaProductos"

function PedirItem(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let ItemN=Math.round(Math.random()*ListaProductos.length)
                resolve(ListaProductos[ItemN])
        },200)
    })
}
export default PedirItem;