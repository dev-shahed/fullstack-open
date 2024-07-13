import React, { Fragment } from "react";
import personService from "../services/persons";

export default function Persons({ persons, filterData, setPersons, setErrorMessage }) {
  const filteredPerson = persons.filter((person) =>
    person.name?.toLowerCase().includes(filterData.toLowerCase())
  );

  const handleDelete = (id) => {
    const thePerson = persons.find((person) => person.id === id).name;
    if (window.confirm(`Delete ${thePerson}`)) {
      personService
        .deleteById(id)
        .then(() => {
          const newPersons = persons.filter((person) => person.id !== id);
          setPersons(newPersons);
        })
        .catch(() =>
          setErrorMessage({
            message: `Information of ${thePerson} has already been removed from the server`,
            status: "error",
          })
        );
      setTimeout(() => {
        setErrorMessage({ message: null, status: "" });
      }, 5000);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  return (
    <Fragment>
      {filteredPerson.map((person, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
          }}
        >
          <h3>
            {person.name} - {person.number}
          </h3>
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </div>
      ))}
    </Fragment>
  );
}
