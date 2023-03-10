import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiKey = "bf54175800a55e59e6c4d6461deeef12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {}
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="forecast-elements">
      <div className="row">
        <div className="col">
          <div className="forecast-day ">day</div>
          <div className="forecast-icon ">
            <WeatherIcon icon="01d" size={36} />
          </div>
          <span className="forecastTemp-min">10°</span>
          <span className="forecastTemp-max">19°</span>
        </div>
      </div>
    </div>
  );
}
