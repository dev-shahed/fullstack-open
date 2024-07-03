import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterData, setFilterData] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then((persons) => setPersons(persons))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterData={filterData} setFilterData={setFilterData} />
      <h3>Add a new name</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers: </h2>
      <Persons persons={persons} setPersons={setPersons} filterData={filterData} />
    </div>
  );
};

export default App;
