import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <>
      <div style={{backgroundColor:color ,
        height:"100vh",
        width:"100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem"}}>
          
        <button onClick={() => setColor("red")}>red</button>
        <button onClick={() => setColor("yellow")}>yellow</button>
        <button onClick={() => setColor("green")}>green</button>
        <button onClick={() => setColor("purple")}>purple</button>
    
      </div>
    </>
  )
}

export default App
