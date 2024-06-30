import React, { Fragment } from "react";

export default function Part({ part }) {
  return (
    <Fragment>
      <p>
        {part.name} {part.exercises}
      </p>
    </Fragment>
  );
}
