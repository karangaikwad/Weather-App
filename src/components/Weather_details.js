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
  };
  if (weather) {
    console.log(weather);
    return (
      <div>
        <div className="right_positioning">
          <form onSubmit={changeName}>
            <input type="text" name="loc"></input>
            <button type="submit"> &#128269;</button>
          </form>
          <h2>Weather details</h2>
          <div>
            <h3>Temperature - {weather.data.main.temp}</h3>
          </div>
          <div>
            <h3>Pressure - {weather.data.main.pressure}</h3>
          </div>
          <div>
            <h3>Humidity - {weather.data.main.humidity}%</h3>
          </div>
          <div>
            <h3>Wind Speed - {weather.data.wind.speed}m/s</h3>
          </div>
          <div>
            <h3>Clouds - {weather.data.clouds.all}%</h3>
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
