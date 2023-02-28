import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=bf54175800a55e59e6c4d6461deeef12&units=metric `;
  function handleResponse(response) {
    console.log(response.data);
  }
  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <form className="form">
        <input type="search" placeholder="Enter a city..." />
        <input type="submit" value="search" />
      </form>
      <h1>City Name</h1>
      <ul className="weather-description">
        <div className="row">
          <div className="col-6">
            <li>Time</li>
            <li>Description</li>
            <li>icon</li>
          </div>
          <div className="col-6">
            <li>Wind</li>
            <li>Humidity</li>
          </div>
        </div>
      </ul>
    </div>
  );
}
