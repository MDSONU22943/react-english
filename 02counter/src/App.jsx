import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addvalue=()=>{
    
    setCounter(counter+1)
  }

  const minusvalue =()=>{
    if(counter!='0'){
    setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>React course with hitesh {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <button onClick={minusvalue}>minus value</button>
      <p>footer : {counter}</p>
      
      
    </>
  )
}

export default App
