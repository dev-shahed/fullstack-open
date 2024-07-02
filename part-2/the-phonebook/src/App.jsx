import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [filterData, setFilterData] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterData={filterData} setFilterData={setFilterData} />
      <h3>Add a new name</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers: </h2>
      <Persons persons={persons} filterData={filterData} />
    </div>
  );
};

export default App;
