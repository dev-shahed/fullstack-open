import { useState } from "react";
import "./App.css";
import StatisticLine from "./components/StatisticLine";

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

  //Button elements
  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
  );

  return (
    <div className="App">
      <h3>Give feedback</h3>

      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <hr />
      {total === 0 ? (
        <h3>No feedback available, add one</h3>
      ) : (
        <>
          <h3>Statistics</h3>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />

          <hr />
          <h4>All: {total}</h4>
          <h4>Average: {average.toFixed(2)}</h4>
          <h4>Positive: {Math.ceil(positive)} %</h4>
        </>
      )}
    </div>
  );
};

export default App;
