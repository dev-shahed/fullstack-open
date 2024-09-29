
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const Header = () => {
  return <h3>Anecdote of the day</h3>;
};

// const MostVotes = ({ anecdotes, voteCount }) => {
//   const highestVote = Math.max(...voteCount);
//   const mostVoteIndex = voteCount.indexOf(highestVote);
//   const result = anecdotes[mostVoteIndex];
//   if (highestVote === 0) {
//     return <p>No votes yet</p>;
//   }
//   return (
//     <Fragment>
//       <h3>Anecdotes with most vote: </h3>
//       <p>{result}</p>
//       <p>Has {highestVote} vote</p>
//     </Fragment>
//   );
// };

// MostVotes.propTypes = {
//   anecdotes: PropTypes.arrayOf(PropTypes.string).isRequired,
//   voteCount: PropTypes.arrayOf(PropTypes.number).isRequired,
// };

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();


  // const length = anecdotes.length;
  // const handleRandomAnecdote = () => {
  //   const randomIndex = Math.floor(Math.random() * length);
  //   setSelected(randomIndex);
  // };

  // const handleVote = () => {
  //   const copy = [...voteCount];
  //   copy[selected] += 1;
  //   setVoteCount(copy);
  // };

  console.log(anecdotes)
  return (
    <div className="App">
      <Header />
      {anecdotes.map((anecdote) => (
        <AnecdoteList key={anecdote.id} anecdote={anecdote}  />
      ))}

      <br />
      <AnecdoteForm  />
      <br />
      
    </div>
  );
};

export default App;
