import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  let form = (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row align-items-center">
          <div className="col-7 ">
            <input
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-primary w-100 "
              type="submit"
              value="search"
            />
          </div>
        </div>
      </form>
    </div>
  );

  function handleResponse(response) {
    setLoaded(true);
    console.log(response);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf54175800a55e59e6c4d6461deeef12&units=metric `;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div className="weather">
        {form}
        <h1>{city}</h1>
        <ul>
          <li>
            <FormattedDate date={weather.date} />
          </li>
          <li>{weather.description}</li>
        </ul>
        <ul>
          <div className="row">
            <div className="col-6">
              <div className="main-temp">
                <li>
                  {" "}
                  <img src={weather.icon} alt="weather icon" />{" "}
                </li>
                <li className="current-temp">
                  {Math.round(weather.temperature)}
                  <span className="units">°C</span>
                </li>
              </div>
            </div>
            <div className="col-6">
              <li>Wind: {weather.wind} km/h</li>
              <li>Humidity: {Math.round(weather.humidity)} %</li>
            </div>
          </div>
        </ul>
      </div>
    );
  } else {
    return <div className="weather">{form}</div>;
  }
}
