import React, { Fragment } from "react";
import Part from "./Part";

export default function Content({ parts }) {
  return (
    <Fragment>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </Fragment>
  );
}
