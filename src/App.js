import "./App.css";
import "axios";
import { useState, useEffect } from "react";
import axios from "axios";
import Weather_details from "./components/Weather_details";

function App() {
  return (
    <div className="container">
      {/* <img src="./back1.jpg" className="image"></img> */}
      <Weather_details />
    </div>
  );
}

export default App;
