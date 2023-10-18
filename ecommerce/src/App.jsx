import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemCount from "./components/ItemCount/ItemCount"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <NavBar/>
        <ItemListContainer greeting="bienvenidos"/>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.console.log("Cantidad agregada ", quantity)}/>
      </div>

    </>
  )
}

export default App
