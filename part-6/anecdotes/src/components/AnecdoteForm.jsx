import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../../reducers/anecdoteReducer';
import { setNotificationInterval } from '../../reducers/notificationReducer';

export default function AnecdoteForm() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    dispatch(createAnecdote(content));
    dispatch(setNotificationInterval(`You added '${content}'`));
  };
  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          width: '300px',
          margin: '0 auto',
        }}
      >
        <input
          name="content"
          style={{
            padding: '8px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          placeholder="Enter content"
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Create
        </button>
      </form>
    </Fragment>
  );
}
