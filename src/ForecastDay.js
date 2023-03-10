import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function formatDay() {
    let date = new Date(props.data[0].dt);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="forecast-elements">
      <div className="row">
        <div className="col">
          <div className="forecast-day ">{formatDay()}</div>
          <div className="forecast-icon ">
            <WeatherIcon icon={props.data[0].weather[0].icon} size={36} />
          </div>
          <span className="forecastTemp-min">
            {Math.round(props.data[0].temp.min)}°
          </span>
          <span className="forecastTemp-max">
            {Math.round(props.data[0].temp.max)}°
          </span>
        </div>
      </div>
    </div>
  );
}
