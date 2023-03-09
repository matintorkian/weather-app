import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
