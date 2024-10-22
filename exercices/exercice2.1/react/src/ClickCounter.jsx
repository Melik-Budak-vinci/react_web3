
import { useState } from 'react'

function ClickCounter({title,message}){
    const [count, setCount] = useState(0);

    const setCounter = () => {
      setCount((count) => count + 1)
    }
    return (
        <div>
            <h1>{title}</h1>
            <div className="card">
          <button onClick={setCounter} >
            {count>=10 ? message:''}
            count is {count}
          </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div></div>
        
    );  
}
export default ClickCounter;