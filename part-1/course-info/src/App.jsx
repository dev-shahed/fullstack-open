import { Fragment } from 'react';
import './App.css';


export function Header(props) {
  return (
    <Fragment>
         <h1>{props.course}</h1>
    </Fragment>
  )
}

export function Content(props) {
  const content = props.parts;
  return (
    <Fragment>
         <p>{content.part1.name} {content.part1.exercises}</p>
         <p>{content.part2.name} {content.part3.exercises}</p>
         <p>{content.part3.name} {content.part3.exercises}</p>
    </Fragment>
  )
}

export function Total(props){
  const parts = props.total;
  const total = parts.part1.exercises + parts.part2.exercises + parts.part3.exercises;
  return (
    <Fragment>
         <p>Number of exercises {total}</p>
    </Fragment>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={{part1, part2, part3}}/>
      <Total total={{part1, part2, part3}}/>
    </div>
  )
}

export default App