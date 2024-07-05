import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country";
import countryService from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");

  // Filtered countries based on the search query
  const filteredCountries = countries.filter((item) =>
    item.name.common.toLowerCase().includes(value.toLowerCase())
  );

  useEffect(() => {
    countryService
      .getAll()
      .then((resCountries) => {
        setCountries(resCountries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      <span>Find countries: </span>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      {value.trim() !== "" &&
        (filteredCountries.length > 10 ? (
          <p>Please make your query more specific. Too many matches found.</p>
        ) : filteredCountries.length === 1 ? (
          <Country country={filteredCountries[0]} />
        ) : (
          filteredCountries.map((country) => (
            <div key={country?.ccn3}>
              <h3>{country.name.common}</h3>
            </div>
          ))
        ))}
    </Fragment>
  );
}

export default App;
