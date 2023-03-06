import React from "react";

export default function FormattedDate(props) {
  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = weekDays[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let seconds = props.date.getSeconds();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return (
    <div>
      {day} {hours}:{minutes}:{seconds}
    </div>
  );
}
