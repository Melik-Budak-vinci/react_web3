import { useState } from 'react'
import Statistics from '../Statistics/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [feedbacks, setFeedbacks] = useState({good:0,neutral:0,bad:0})
  

  const handleGood = () => {
    const newFeedbacks = {...feedbacks,good:feedbacks.good + 1}
    setFeedbacks(newFeedbacks)

      
  }
  const handleNeutral = () => {
    const newFeedbacks = {...feedbacks,neutral:feedbacks.neutral + 1}
    setFeedbacks(newFeedbacks)


    }
    const handleBad = () => {
        const newFeedbacks = {...feedbacks,bad:feedbacks.bad + 1}
        setFeedbacks(newFeedbacks)
    }

  return (
    <div style={{justifyContent:'center',alignItems:'center'}}>
        <h3>give feedback</h3>
      <button onClick={handleBad}>Bad</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleGood}>good</button>
        <h3>statistics</h3>
        
        <Statistics feedbacks={feedbacks} />

    </div>
  )
}

export default App