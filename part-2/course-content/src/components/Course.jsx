import React, { Fragment } from 'react';
import Content from './Content';
import Header from './Header';
import Total from './Total';



export default function Course({courses}) {
  console.log(courses);
  return (
    <Fragment>
          {courses.map(course => 
            <div key={course.id}>
               <Header name={course.name}/>
               <Content parts={course.parts}/>
               <Total parts={course.parts}/>
            </div>
            )}
    </Fragment>
  )
}
