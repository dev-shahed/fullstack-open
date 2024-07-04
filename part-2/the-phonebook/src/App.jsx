import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState(null);
  const [filterData, setFilterData] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    message: null,
    status: "",
  });

  useEffect(() => {
    personService
      .getAll()
      .then((persons) => setPersons(persons))
      .catch((err) => console.log(err));
  }, []);

  if (!persons) {
    return (
      <div className="App">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification value={errorMessage} />
      <Filter filterData={filterData} setFilterData={setFilterData} />
      <h3>Add a new name</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
      />
      <h2>Numbers: </h2>
      <Persons
        persons={persons}
        setPersons={setPersons}
        filterData={filterData}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};

export default App;
