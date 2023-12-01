import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  const add=()=>{
    setCounter(counter+1);
  };

  const sub=()=>{
    if(counter> 0){
      setCounter(counter-1);
    }
    else{
      setCounter(counter=0);
    }
  };

  const reset=()=>{
    setCounter(counter = 0)
  }
  return (
    <>
      <h1>Counter App</h1>
      <div>
        <h1>{counter}</h1>
      </div>
      <div className="btns">
        <button onClick={add}>Add</button>
        <button onClick={sub}>Subtract</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
