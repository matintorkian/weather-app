import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  let forecast = props.data;
  function formatDay() {
    let date = new Date(forecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="forecast-elements">
      <div className="forecast-day ">{formatDay()}</div>
      <div className="forecast-icon ">
        <WeatherIcon icon={forecast.weather[0].icon} size={36} />
      </div>
      <span className="forecastTemp-min">{Math.round(forecast.temp.min)}°</span>
      <span className="forecastTemp-max">{Math.round(forecast.temp.max)}°</span>
    </div>
  );
}
