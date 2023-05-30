import ItemListContainer from './componentes/ItemList/ItemListContainer'
import Header from "./componentes/Header/Header"
import './App.scss'

function App() {
  return(
   <div className="cuerpoPagina">

      <Header/>
      <ItemListContainer Greet='Tecnologia (FDM)' Greet2='Tecnologia (LCD/LCA)'/>
      
   </div>
   
    )
  
  
}

export default App
