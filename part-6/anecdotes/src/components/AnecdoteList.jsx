import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { voteAnecdote } from '../../reducers/anecdoteReducer';
import Button from './Button';

export default function AnecdoteList({ anecdote }) {
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(voteAnecdote(id));
  };

  return (
    <div>
      <span>{anecdote.content} </span>
      <span>
        Has {anecdote.votes}
        <Button event={() => handleVote(anecdote.id)} text="Vote" />
      </span>
    </div>
  );
}

AnecdoteList.propTypes = {
  anecdote: PropTypes.shape({
    content: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
