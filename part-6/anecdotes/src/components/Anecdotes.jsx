import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import AnecdoteList from './AnecdoteList';

export default function Anecdotes() {
  const anecdotes = useSelector((state) => state || []);
  return (
    <Fragment>
      {anecdotes.length > 0 ? (
        anecdotes.map((anecdote) => (
          <AnecdoteList key={anecdote.id} anecdote={anecdote} />
        ))
      ) : (
        <p>No anecdotes available..</p>
      )}
    </Fragment>
  );
}
