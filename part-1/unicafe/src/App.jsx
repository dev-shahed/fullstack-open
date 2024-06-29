import { useState } from "react";
import "./App.css";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  // Calculate average
  const average = total === 0 ? 0 : (good * 1 + bad * -1) / total;
  // Calculate positive percentage
  const positive = total === 0 ? 0 : (good * 100) / total;


  return (
    <div className="App">
      <h3>Give feedback</h3>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <hr />
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <hr />
      <h4>All: {total}</h4>
      <h4>Average: {average.toFixed(2)}</h4>
      <h4>Positive: {Math.ceil(positive)} %</h4>
    </div>
  );
};

export default App;
