
import './App.css'
import { Ingridients } from './Components/ingridients'
import { SearchBar } from './Components/searchBar'
import { ShoppingGrid } from './Components/shoppingGrid'


function App (){
  return <div>
    <SearchBar/>
    <Ingridients/>
    <ShoppingGrid/>
  </div>
}

export default App
