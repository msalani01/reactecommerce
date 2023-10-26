import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemCount from "./components/ItemCount/ItemCount"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting="bienvenidos" />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)} />
      <ItemDetailContainer />
    </div>
  )
}

export default App
