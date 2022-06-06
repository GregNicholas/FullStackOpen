import { useState } from 'react'
import GetFeedback from './components/GetFeedback'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const isFeedback = good || neutral || bad ? true : false
  
  const updateGood = () => setGood(prev => prev + 1)
  const updateNeutral = () => setNeutral(prev => prev + 1)
  const updateBad = () => setBad(prev => prev + 1)
  console.log(good, neutral, bad)

  return (
    <div>
	  <h2>give feedback</h2>
      <GetFeedback updateGood={updateGood} updateNeutral={updateNeutral} updateBad={updateBad} />
	  <h2>statistics</h2>
	  {isFeedback ? 
		<Statistics good={good} neutral={neutral} bad={bad} /> :
		<p>no feedback given</p>
	  }
    </div>
  )
}

export default App