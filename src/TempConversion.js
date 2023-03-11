import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="current-temp">
        {props.temperature}
        <span className="units">
          °C |{" "}
          <a
            href="https://visionary-valkyrie-04bfdd.netlify.app/"
            rel="noreferrer"
            onClick={showFahrenheit}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="current-temp">
        {Math.round((props.temperature * 9) / 5 + 32)}
        <span className="units">
          <a
            href="https://visionary-valkyrie-04bfdd.netlify.app/"
            rel="noreferrer"
            onClick={showCelsius}
          >
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
