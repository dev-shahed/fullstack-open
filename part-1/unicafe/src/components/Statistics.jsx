import React, { Fragment } from "react";

export default function Statistics({good, neutral, bad}) {
  return (
    <Fragment>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </Fragment>
  );
}
