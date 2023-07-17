import ListaProductos from './ListaProductos'
import { db } from './firebase';
import { collection,getDoc } from 'firebase/firestore';

const PedirData =() =>{

    const dataRef=collection(db,'productos')

    

    return getDoc(dataRef)
};
export default PedirData;
