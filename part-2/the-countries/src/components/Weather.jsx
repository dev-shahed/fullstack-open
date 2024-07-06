import React, { Fragment, useEffect, useState } from "react";
import weatherService from "../services/weather";

export default function Weather({ capital, latlng }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const lat = latlng[0];
  const lon = latlng[1];

  useEffect(() => {
    weatherService
      .getData(lat, lon)
      .then((resData) => {
        setWeatherData(resData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err);
        setLoading(false);
      });
  }, [lat, lon]);

  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (!weatherData || !weatherData.list || !weatherData.list.length) {
    return <p>No weather data available</p>;
  }

  const weatherCelsius = weatherData.list[0].main.temp - 273.15;
  const iconcode = weatherData.list[0].weather[0].icon;
  const iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;
  const wind = weatherData.list[0].wind.speed;

  return (
    <Fragment>
      <h3>Weather in {capital}</h3>
      <p>Temperature: {weatherCelsius.toFixed(2)} Celsius</p>
      <img src={iconurl} alt="Weather Icon" />
      <p>Wind: {wind} m/s</p>
    </Fragment>
  );
}
