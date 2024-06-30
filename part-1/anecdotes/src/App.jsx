import { Fragment, useState } from "react";
import "./App.css";

const Header = () => {
  return (
    <Fragment>
      <h3>Anecdote of the day</h3>
    </Fragment>
  );
};

const Anecdotes = ({ text, count }) => {
  return (
    <Fragment>
      <h4>{text}</h4>
      <h5>Has {count} votes</h5>
    </Fragment>
  );
};

const Button = ({ event, text }) => {
  return <button onClick={() => event()}>{text}</button>;
};

const MostVotes = ({ anecdotes, voteCount }) => {
  const highestVote = Math.max(...voteCount);
  const mostVoteIndex = voteCount.indexOf(highestVote);
  const result = anecdotes[mostVoteIndex];
  if (highestVote === 0) {
    return <p>No votes yet</p>;
  }
  return (
    <Fragment>
      <h3>Anecdotes with most vote: </h3>
      <p>{result}</p>
      <p>Has {highestVote} vote</p>
    </Fragment>
  );

};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [voteCount, setVoteCount] = useState(Array(anecdotes.length).fill(0));

  const length = anecdotes.length;
  const handleRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const copy = [...voteCount];
    copy[selected] += 1;
    setVoteCount(copy);
  };

  return (
    <div className="App">
      <Header />
      <Anecdotes text={anecdotes[selected]} count={voteCount[selected]} />
      <br />
      <Button event={handleVote} text="Vote" />
      <Button event={handleRandomAnecdote} text="Next Anecdotes" />
      <br />
      <br />
      <br />
      <MostVotes anecdotes={anecdotes} voteCount={voteCount} />
    </div>
  );
};

export default App;
