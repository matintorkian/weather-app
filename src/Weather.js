import React from "react";
import axios from "axios";

export default function Weather() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=bf54175800a55e59e6c4d6461deeef12&units=metric `;
  function handleResponse(response) {
    alert(response.data.main.temp);
    console.log(response.data);
  }
  axios.get(apiUrl).then(handleResponse);
  return;
}
