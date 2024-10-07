import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../reducers/filterReducer';
import AnecdoteList from './AnecdoteList';

export default function FilterAnecdote() {
  const dispatch = useDispatch();
  const queryValue = useSelector((state) => state.filter);
  const handleChange = (e) => {
    dispatch(filterChange(e.target.value));
  };

  const filterItems = useSelector((state) => {
    const anecdotes = [...state.anecdotes];
    // Function to sort anecdotes by votes in descending order
    const sortByVotes = (items) => items.sort((a, b) => b.votes - a.votes);
    if (state.filter === 'ALL') {
      return sortByVotes(anecdotes); 
    }
    // Filter based on query string and then sort by votes..
    const filteredAnecdotes = anecdotes.filter((item) =>
      item.content.toLowerCase().includes(state.filter.toLowerCase())
    );
    return sortByVotes(filteredAnecdotes);
  });

  return (
    <div>
      Filter{' '}
      <input
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginBottom: '40px',
        }}
        placeholder="Filter anecdotes"
        onChange={handleChange}
        defaultValue={queryValue === 'ALL' && ''}
      />
      <hr />
      {filterItems.length > 0 ? (
        filterItems.map((anecdote) => (
          <AnecdoteList key={anecdote.id} anecdote={anecdote} />
        ))
      ) : (
        <p>No anecdotes available..</p>
      )}
    </div>
  );
}

