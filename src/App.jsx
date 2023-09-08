import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  const anotherButton = () => {
    confirm('yes abbr done')
  }

  const eventHandler = () => {
    alert('come to the point')
  }

  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={eventHandler}>click mne</button>
      <button onClick={anotherButton}>Another button</button>
      <button onClick={() => addToThree(3)}>there</button>
    </>
  )
}

export default App
