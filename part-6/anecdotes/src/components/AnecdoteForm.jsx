import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../../reducers/anecdoteReducer';

export default function AnecdoteForm() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    dispatch(createAnecdote(content));
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input name="content" />
        <button type="submit">create</button>
      </form>
    </Fragment>
  );
}
