import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { voteAnecdote } from '../../reducers/anecdoteReducer';
import { setNotificationInterval } from '../../reducers/notificationReducer';
import Button from './Button';

export default function AnecdoteList({ anecdote }) {
  const dispatch = useDispatch();

  const handleVote = (id) => {
    const votedAnecdote = dispatch(voteAnecdote(id));
    dispatch(
      setNotificationInterval(`You voted for '${votedAnecdote.content}'`)
    );
  };

  return (
    <div style={{ margin: '20px' }}>
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
