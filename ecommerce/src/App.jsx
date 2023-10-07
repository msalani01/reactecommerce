import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import "./components/ItemListContainer/ItemListContainer"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <NavBar/>
        <ItemListContainer greeting={"bienvenidxs"}/>
      </div>

    </>
  )
}

export default App
