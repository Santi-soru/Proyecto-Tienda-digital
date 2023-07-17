import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Header from "./componentes/Header/Header"
import './App.scss'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoExiste from './componentes/NoExiste/NoExiste'
import CardConteiner from './componentes/CardConteiner/CardConteiner'
import { useEffect, useState } from 'react'
import userContex from './componentes/contexto/userContex'
import Checkout from './componentes/Checkout/Checkout'
import { CaritoProvedor } from './componentes/contexto/caritoProvedor'



function App() {

  
   //funcionalidad para registar el nombre de usuario

   const[newUser,setUser]=useState(localStorage.getItem('nombre') ||NaN)
  

    const registrar=()=>{
        let nombre=prompt('ingresa tu nombre por favor')
        setUser(nombre)
         localStorage.setItem('nombre',nombre)}

   useEffect(()=>{
 
    newUser||registrar()
   },[])
 
  //-----
  
  return (
    <CaritoProvedor>
      <userContex.Provider value={newUser}>
        <BrowserRouter>
          <div className="cuerpoPagina">
          <Header />
            <Routes>
              
                <Route path='/' element={<ItemListContainer Greet='Tecnologia (FDM)' Greet2='Tecnologia (LCD/LCA)' />}/>
                <Route path='/pros/:tecnologia' element={<ItemListContainer Greet='Tecnologia (FDM)' Greet2='Tecnologia (LCD/LCA)' />}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/detalle/:producto' element={<ItemDetailContainer/>}/>
                <Route path='/card' element={<CardConteiner/>}/>
                <Route path='*' element={<NoExiste/>} />
              
            </Routes>
          </div>
        </BrowserRouter>
      </userContex.Provider>
      </CaritoProvedor>
  )


}

export default App
