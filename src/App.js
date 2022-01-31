import "./App.css";
import "axios";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
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
        <div>{weather.data.main.temp}</div>
        <div>{weather.data.name}</div>
        <div>{weather.data.weather[0].description}</div>
        <form onSubmit={changeName}>
          <input type="text" name="loc"></input>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
  return <>Loading</>;
}

export default App;
