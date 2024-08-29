import { useState } from 'react'
import Intro from './components/Intro'
import Board from './components/Board'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
      <Board />
    </>
  )
}

export default App
