import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country";
import countryService from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Fetch countries data on component mount
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

  // Filter countries based on the search query
  const filteredCountries = countries.filter((item) =>
    item.name.common.toLowerCase().includes(value.toLowerCase())
  );

  const handleShowClick = (country) => {
    setSelectedCountry(country);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Clear selected country when input is cleared
    if (newValue.trim() === "") {
      setSelectedCountry(null);
    }
  };

  return (
    <Fragment>
      <span>Find countries: </span>
      <input value={value} type="text" onChange={handleInputChange} />
      {value.trim() !== "" && (
        <div>
          {filteredCountries.length > 10 ? (
            <p>Please make your query more specific. Too many matches found.</p>
          ) : filteredCountries.length === 1 ? (
            <Country country={filteredCountries[0]} />
          ) : (
            filteredCountries.map((country) => (
              <div key={country.ccn3}>
                <span>{country.name.common}</span>
                <button onClick={() => handleShowClick(country)}>show</button>
              </div>
            ))
          )}
        </div>
      )}
      {value.trim() !== "" &&
        selectedCountry &&
        filteredCountries.length !== 1 && <Country country={selectedCountry} />}
    </Fragment>
  );
}

export default App;
