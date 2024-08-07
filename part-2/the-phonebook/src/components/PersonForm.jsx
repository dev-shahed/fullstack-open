import React, { Fragment, useState } from "react";
import personService from "../services/persons";

const PersonInput = ({ text, value, onChange, type }) => {
  return (
    <input
      placeholder={text}
      value={value}
      onChange={onChange}
      type={type}
      required
      style={{
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "200px",
        marginBottom: "10px",
      }}
    />
  );
};

export default function PersonForm({ persons, setPersons, setErrorMessage }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const personExists = persons.find((person) => person.name === newName);

    if (personExists) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updateNumber = { ...personExists, number: newNumber };
        await personService
          .update(personExists.id, updateNumber)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== personExists.id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
          });
      }
    } else {
      const personObj = { name: newName, number: newNumber };
      await personService
        .create(personObj)
        .then((resObj) => {
          setPersons(persons.concat(resObj));
          setErrorMessage({
            message: `${newName} has been added`,
            status: "success",
          });
          setTimeout(() => {
            setErrorMessage({ message: null, status: "" });
          }, 5000);
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          setErrorMessage({
            message: error.response.data.error,
            status: "error",
          });
          setTimeout(() => {
            setErrorMessage({ message: null, status: "" });
          }, 5000);
        });
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <div>
          <span>Name: </span>
          <PersonInput
            text={"name"}
            value={newName}
            onChange={handleNameChange}
            type="text"
          />
        </div>
        <div>
          <span>Number: </span>
          <PersonInput
            text={"number"}
            value={newNumber}
            onChange={handleNumberChange}
            type="text"
          />
        </div>
        <div>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      </form>
    </Fragment>
  );
}
