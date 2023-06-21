import ListaProductos from './ListaProductos'

const PedirData =() =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(ListaProductos);
        },200);
    });
};
export default PedirData;
