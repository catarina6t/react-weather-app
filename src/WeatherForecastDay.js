import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}º`
    }
        function minTemperature() {
          let temperature = Math.round(props.data.temp.min);
          return `${temperature}º`;
    }
    
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        

        let days = ["Sun","Mon","Tue","Wed" ,"Thu","Fri","Sat"]

        return day[day];

    }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max"> {maxTemperature()}
          
          {forecast[0].temp.max}º
        </span>
        <span className="WeatherForecast-temperature-min"> {minTemperature()}
          
          {forecast[0].temp.min}º
        </span>
      </div>
    </div>
  );
}
