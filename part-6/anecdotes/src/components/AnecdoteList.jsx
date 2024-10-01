import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { voteAnecdote } from '../../reducers/anecdoteReducer';
import Button from './Button';

export default function AnecdoteList({ anecdote }) {
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(voteAnecdote(id));
  };

  return (
    <Fragment>
      <div>{anecdote.content}</div>
      <div>
        Has {anecdote.votes}
        <Button event={() => handleVote(anecdote.id)} text="Vote" />
      </div>
    </Fragment>
  );
}

AnecdoteList.propTypes = {
  anecdote: PropTypes.shape({
    content: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
