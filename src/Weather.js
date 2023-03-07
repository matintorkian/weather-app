import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import LoadingIcons from "react-loading-icons";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
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
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf54175800a55e59e6c4d6461deeef12&units=metric `;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div className="weather">
        {form}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        <LoadingIcons.ThreeDots stroke="#0000FF" />
      </div>
    );
  }
}
