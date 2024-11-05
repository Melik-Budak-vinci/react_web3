import { useState } from 'react'
import reactLogo from 'assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [satisfaction, setSatisfaction] = useState({Good:0,Ok:0,Bad:0})
  
  const setGood = ()=>{
    setSatisfaction({...satisfaction,Good:satisfaction.Good+1})
  }
  const setOk = ()=>{
    setSatisfaction({...satisfaction,Ok:satisfaction.Ok+1})
  }
  const setBad = ()=>{
    setSatisfaction({...satisfaction,Bad:satisfaction.Bad+1})
  }
  return (
   <>
    <div>
      <p>good : {satisfaction.Good}</p> <button onClick={setGood}>increase good</button>
      <p>Ok : {satisfaction.Ok}</p> <button onClick={setOk}> increase ok </button>
      <p>Bad : {satisfaction.Bad}</p> <button onClick={setBad}>increase bad </button>

    </div>
   </>
  )
}

export default App
