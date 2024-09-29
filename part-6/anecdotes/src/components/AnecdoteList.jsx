import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

export default function AnecdoteList({ anecdote }) {
  console.log(anecdote);
  return (
    <Fragment>
      <h4>{anecdote.content}</h4>
      <h4>{anecdote.votes}</h4>
    </Fragment>
  );
}

AnecdoteList.propTypes = {
  anecdote: PropTypes.object.isRequired,
};
