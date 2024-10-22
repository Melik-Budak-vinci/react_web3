
import { useState } from 'react'

function ClickCounter({title,message,hoveredMessage}){
    const [count, setCount] = useState(0);
    const [isHovered,setHovered] = useState(0)

    const setCounter = () => {
      setCount((count) => count + 1)
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