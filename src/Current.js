import React from "react";
import "./current.css";

export default function Current() {
  let weatherData = {
    city: "Winchester",
    description: "Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/02d@2x.png",
    celsius: 7,
    humidity: 45,
    wind: 4,
  };
  return (
    <div className="Current">
      <h2>{weatherData.city}</h2>
      <p>{weatherData.description}</p>
      <div className="row">
        <div className="col-4 current-temperature">
          <p>
            <span className="temperature-number">{weatherData.celsius}</span>
            <span className="temperature-unit">°C</span>
          </p>
        </div>
        <div className="col-4 current-weather-icon">
          <img src={weatherData.imgUrl} alt={weatherData.description} />
        </div>
        <div className="col-4 current-weather-info">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} m/s</li>
          </ul>
        </div>
      </div>
      <div className="future-forecast-details"></div>
    </div>
  );
}
