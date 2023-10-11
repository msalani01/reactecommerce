import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import "./components/ItemListContainer/ItemListContainer"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from "./components/ItemCount/ItemCount"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <NavBar/>
        <ItemListContainer greeting={"bienvenidxs"}/>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad agregada ",quantity)}/>
      </div>

    </>
  )
}

export default App
