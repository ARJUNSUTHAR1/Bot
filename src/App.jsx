import { useState } from 'react'
import './App.css'
import Bot from './Bot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Bot/>
    </>
  )
}

export default App
