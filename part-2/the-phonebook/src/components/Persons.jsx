import React, { Fragment } from "react";

export default function Persons({ persons, filterData }) {
  const filteredPerson = persons.filter((person) =>
    person.name?.toLowerCase().includes(filterData.toLowerCase())
  );

  return (
    <Fragment>
      {filteredPerson.map((person, i) => (
        <h3 key={i} style={{ marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>
          {person.name} - {person.number}
        </h3>
      ))}
    </Fragment>
  );
}
