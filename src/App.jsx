import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Header from "./componentes/Header/Header"
import './App.scss'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NoExiste from './componentes/NoExiste/NoExiste'


function App() {


  return (
    <BrowserRouter>
      <div className="cuerpoPagina">
      <Header />
        <Routes>
          
          <Route path='/' element={<ItemListContainer Greet='Tecnologia (FDM)' Greet2='Tecnologia (LCD/LCA)' />}/>
          <Route path='/pros/:tecnologia' element={<ItemListContainer Greet='Tecnologia (FDM)' Greet2='Tecnologia (LCD/LCA)' />}/>
          <Route path='/detalle/:producto' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<NoExiste/>} />
      
        </Routes>
      </div>
    </BrowserRouter>

  )


}

export default App
