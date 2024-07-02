import React, { Fragment, useState } from "react";

const PersonInput = ({ text, value, onChange, type }) => {
  return (
    <input
      placeholder={text}
      value={value}
      onChange={onChange}
      type={type}
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

export default function PersonForm({ persons, setPersons }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons((persons) => [
        ...persons,
        { name: newName, number: newNumber },
      ]);
      setNewName("");
      setNewNumber("");
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
            type="number"
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
