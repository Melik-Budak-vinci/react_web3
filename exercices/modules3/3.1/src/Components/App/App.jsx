import { useEffect, useState } from 'react'
import Statistics from 'components/Statistics/Statistics'
import Loading from 'components/Loader/Loading'

const App = () => {
  // save clicks of each button to its own state
  const [feedbacks, setFeedbacks] = useState({good:0,neutral:0,bad:0})
  const [loading, setLoading] = useState(true)
  

  const handleGood = () => {
    setLoading(true)
    const newFeedbacks = {...feedbacks,good:feedbacks.good + 1}
    setFeedbacks(newFeedbacks)
      
  }
  
  const handleNeutral = () => {
    setLoading(true)
    const newFeedbacks = {...feedbacks,neutral:feedbacks.neutral + 1}
    setFeedbacks(newFeedbacks)


    }
    const handleBad = () => {
        setLoading(true)
        const newFeedbacks = {...feedbacks,bad:feedbacks.bad + 1}
        setFeedbacks(newFeedbacks)
    }
    const handleLoading = () => {
        setLoading(false)
    
      }
    setTimeout(handleLoading, 3000)
  return (
    <div style={{justifyContent:'center',alignItems:'center'}}>
        <h3>give feedback</h3>
      <button onClick={handleBad}>Bad</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleGood}>good</button>
        <h3>statistics</h3>
        {loading? <Loading/>:<Statistics feedbacks={feedbacks} />}

    </div>
  )
}

export default App