import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";
import "./Weather.css";

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
              <li className="main-canvas">
                {" "}
                <WeatherIcon icon={props.data.icon} />{" "}
              </li>
              <li>
                <TempConversion
                  temperature={Math.round(props.data.temperature)}
                />
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
