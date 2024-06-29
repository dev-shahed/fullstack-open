import { useState } from 'react'
import './App.css'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className='App'>
        <h3>Give feedback</h3>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 0)}>Neutral</button>
        <button onClick={() => setBad(bad - 1)}>Bad</button>
    </div>
  )
}

export default App