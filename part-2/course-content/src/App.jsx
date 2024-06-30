import { Fragment } from "react";
import "./App.css";
import Course from "./components/Course";

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
        {" " + parts.reduce((sum, part) => sum + part.exercises, 0)}
      </p>
    </Fragment>
  );
}

const App = () => {

  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course courses={courses} />;
};

export default App;
