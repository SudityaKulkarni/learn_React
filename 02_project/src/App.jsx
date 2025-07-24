import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter = 15
  let [counter, setCounter] = useState(15);
  //using useState hook to manage state in functional components
  //useState returns an array with two elements: the current state and a function to update it

  const addValue = function(){
      if(counter < 20)
        counter += 1;
      setCounter(counter); // updating the state using setCounter function
      }

    const decVal = () => {
      if(counter > 0)
        counter -= 1;
      setCounter(counter);
    }

  return (
    <>
      <h1>looks like kannur trip flop only</h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={decVal}>decrease value</button>  
    </>
  )
}

export default App
