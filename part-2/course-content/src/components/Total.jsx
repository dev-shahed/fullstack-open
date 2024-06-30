import React, { Fragment } from "react";

export default function Total({ parts }) {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <Fragment>
      <h4>Total of {total}</h4>
      <hr/>
    </Fragment>
  );
}
