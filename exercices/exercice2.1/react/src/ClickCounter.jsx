
import { useState } from 'react'

function ClickCounter({title,message,hoveredMessage}){

    localStorage.getItem("count")==null ? localStorage.setItem("count",0):'';
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
    const [isHovered,setHovered] = useState(false)

    const setCounter = () => {
        const newCount = count + 1
        setCount((count) => count + 1)
        localStorage.setItem("count",newCount)
    }
    const setHovereder = () => {
        setHovered((isHovered) =>!isHovered)
    }
    return (
        <div>
            <h1>{title}</h1>
            <div className="card">
          <button onClick={setCounter}  onMouseEnter={setHovereder} onMouseLeave={setHovereder}>
            {count>=10 ? message:''}
            count is {count}
          </button>
          {isHovered && (
        <div>
            <p>{hoveredMessage}</p>
        </div>
      )}        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div></div>
        
    );  
}
export default ClickCounter;