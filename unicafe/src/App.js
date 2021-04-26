import React, {useState} from 'react'

const Heading = () => {
  return (
    <h1>give feedback</h1>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => (
  <tbody>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  </tbody>
  
)
const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={good+neutral+bad}/>
        <Statistic text="average" value={(good-bad)/(good+neutral+bad)}/>
        <tr>
          <td>positive</td>
          <td>{good/(good+neutral+bad)*100}%</td>
        </tr>
      </table>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
  }

  const handleNeutral = () => setNeutral(neutral+1)

  const handleBad = () => setBad(bad+1)
  return (
    <>
      <Heading />
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App