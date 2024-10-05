import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import AnecdoteList from './AnecdoteList';

export default function Anecdotes() {
  const anecdotes = useSelector((state) => state || []);
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);
  return (
    <Fragment>
      {anecdotes.length > 0 ? (
        sortedAnecdotes.map((anecdote) => (
          <AnecdoteList key={anecdote.id} anecdote={anecdote} />
        ))
      ) : (
        <p>No anecdotes available..</p>
      )}
    </Fragment>
  );
}
