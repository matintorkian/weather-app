import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <ul>
        <div className="row">
          <div className="col-6">
            <div className="main-temp">
              <li>
                {" "}
                <img src={props.data.icon} alt="weather icon" />{" "}
              </li>
              <li className="current-temp">
                {Math.round(props.data.temperature)}
                <span className="units">°C</span>
              </li>
            </div>
          </div>
          <div className="col-6">
            <li>Wind: {props.data.wind} km/h</li>
            <li>Humidity: {Math.round(props.data.humidity)} %</li>
          </div>
        </div>
      </ul>
    </div>
  );
}
