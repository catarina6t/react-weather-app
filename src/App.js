import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Cate and is{" "}
          <a
            href="https://github.com/catarina6t/react-weather-app"
            target="_blank"
          
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
