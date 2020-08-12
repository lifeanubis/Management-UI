import React, { useState } from "react";
import "./weather.css";
import image from "./image/web1.jpg";
import { Pane, h1, SearchInput } from "evergreen-ui";
const api = {
  key: "53b666d6437e81e61c38b0bb82323e7d",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key} `)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "jan",
      "feb",
      "march",
      "april",
      "may",
      "june",
      "july",
      "aug",
      "sept",
      "oct",
      "nov",
      "dec",
    ];

    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "Friday",
      "saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="container">
      <div className="search">
        <SearchInput
          placeholder="search places"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>

      {typeof weather.main != "undefined" ? (
        <div className="cards">
          <div className="card">
            <h1> {dateBuilder(new Date())} </h1>
          </div>
          <div className="card">
            <h1>
              {weather.name} , {weather.sys.country}
            </h1>
          </div>
          <div className="card">
            <h1>{Math.round(weather.main.temp)}</h1>
          </div>
          <div className="card">
            <h1> {weather.weather[0].description} </h1>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Weather;
