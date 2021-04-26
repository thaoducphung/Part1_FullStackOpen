import React, {useState} from 'react' 

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const points = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  }
  // console.log(points)
  // const points = Array.apply(null, new Array(5)).map(Number.prototype.valueOf,0);
  // const points = Array(5).fill(0);
  // console.log(points)

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  // const [maxVote, setMaxVote] = useState(0)

  const handleAnecdotes = () => {
    let randomNumber = Math.floor(Math.random()*6)
    // console.log(randomNumber)
    setSelected(randomNumber)
  }

  // const handleVotes_Array = ({selected}) => () => {
  //   // console.log(selected)
  //   const copyVotes = [...votes]
  //   copyVotes[selected] += 1
  //   setVotes(copyVotes)
  // }

  const handleVotes_Object = ({selected}) => () => {
    // console.log(selected)
    // console.log(votes)
    const copyVotes = {...votes}
    copyVotes[selected] += 1
    // console.log(copyVotes)
    setVotes(copyVotes)
  }

  const MostValue = ({votes,anecdotes}) => {
    console.log('votes',votes)
    console.log('anecdotes',anecdotes)
    let argmax = Object.keys(votes).reduce(function(a,b){return votes[a] > votes[b] ? a : b})  
    return (
      <>
      <div>{anecdotes[argmax]}</div>
      <div>has {votes[argmax]} votes</div>
      </>
    )
  }

  let argmax = Object.keys(votes).reduce(function(a,b){return votes[a] > votes[b] ? a : b})
  console.log(argmax)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={handleVotes_Object({selected})} text="vote"/>
      <Button handleClick={handleAnecdotes} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <MostValue votes={votes} anecdotes={anecdotes}/>
      
    </div>
  )
}

export default App