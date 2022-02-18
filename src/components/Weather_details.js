import React from "react";
import "axios";
import { useState, useEffect } from "react";
import axios from "axios";

function Weather_details(props) {
  const [weather, setWeather] = useState("");
  const [name, setName] = useState("nashik");

  const apiCall = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=652383700156ae5151078381989515a4`
    );
    setWeather(res);
  };
  // This will call the function which is loading the data

  useEffect(() => {
    apiCall();
  }, [name]);
  const changeName = (event) => {
    event.preventDefault();
    setName(event.target.elements.loc.value);
    event.target.elements.loc.value = "";
  };
  if (weather) {
    console.log(weather);
    return (
      <div>
        <div className="right_positioning">
          <form onSubmit={changeName}>
            <input type="text" name="loc"></input>
            <button type="submit" className="sumbitbtn">
              <div className="divimg">
                <img src="./search.png" width="20px"></img>
              </div>
            </button>
          </form>
          <div className="details">
            <text>
              <strong>Weather details</strong>
            </text>
            <div className="detail">
              <text>Temperature - {weather.data.main.temp}</text>
            </div>
            <div className="detail">
              <text>Pressure - {weather.data.main.pressure}</text>
            </div>
            <div className="detail">
              <text>Humidity - {weather.data.main.humidity}%</text>
            </div>
            <div className="detail">
              <text>Wind Speed - {weather.data.wind.speed}m/s</text>
            </div>
            <div className="detail">
              <text>Clouds - {weather.data.clouds.all}%</text>
            </div>
          </div>
        </div>

        <div className="bottom_positioning">
          <div>
            <h1>
              {weather.data.main.temp}&deg;C {weather.data.name}
            </h1>
          </div>
          <div>
            <h2>{weather.data.weather[0].description}</h2>
          </div>
        </div>
      </div>
    );
  }
  return <>Loading</>;
}
export default Weather_details;
