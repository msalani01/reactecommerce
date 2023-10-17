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
        <ItemCount/>
      </div>

    </>
  )
}

export default App
