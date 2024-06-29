import { Fragment } from "react";
import "./App.css";

export function Header(props) {
  return (
    <Fragment>
      <h1>{props.course}</h1>
    </Fragment>
  );
}

export function Content(props) {
  const contents = props.parts;
  if (contents.length === 0) {
    return <p>No course parts available</p>;
  }
  return (
    <Fragment>
      {contents.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}
    </Fragment>
  );
}

export function Total(props) {
  const parts = props.parts;
  if (parts.length === 0) {
    return <p>No course exercises available</p>;
  }
  return (
    <Fragment>
      <p>
        Number of exercises
        {' ' + parts.reduce((sum, part) => sum + part.exercises, 0)}
      </p>
    </Fragment>
  );
}

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
