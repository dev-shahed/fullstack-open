import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ event, text }) {
  return <button onClick={() => event()}>{text}</button>;
}

Button.propTypes = {
  event: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
