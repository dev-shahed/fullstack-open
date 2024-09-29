import PropTypes from 'prop-types';
import { Fragment } from 'react';

export default function Anecdotes({ text, count }) {
  Anecdotes.propTypes = {
    text: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  };

  return (
    <Fragment>
      <h4>{text}</h4>
      <h5>Has {count} votes</h5>
    </Fragment>
  );
}
