import React, { useState, useEffect } from "react";

import DateObject from "react-date-object";
import axios from "axios";
import "./TempApp.css";
import DataAvailable from "./DataAvailable";
import NoDataAvailable from "./NoDataAvailable";

const TempApp = () => {
  const [inputCity, setInputCity] = useState("");
  const [tempData, setTempData] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [countryData, setCountryData] = useState({});
  const [cityData, setCityData] = useState({});
  const [windData, setWindData] = useState({});
  const [toggle, setToggle] = useState(false);

  const apiKey = "0d3935adaf56c41f4ddda4ba3edcb20d";

  const date = new DateObject();

  useEffect(() => {
    fetchWeatherData("mumbai");
  }, []);

  const fetchWeatherData = (cityName) => {
    if (!cityName) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    axios
      .get(url)
      .then((res) => {
        setCityData(res.data);
        setTempData(res.data.main);
        setWeatherData(res.data.weather[0]);
        setCountryData(res.data.sys);
        setWindData(res.data.wind);
      })
      .catch((err) => {
        setCityData();
        setTempData();
        setWeatherData();
        setCountryData();
        setWindData();
        console.log("err", err);
      });
  };

  const inputHandler = (value) => {
    setInputCity(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputCity("");
    setToggle(false);
  };

  const clickHandler = () => {
    setToggle(!toggle);
    setInputCity("");
  }

  return (
    <>
      <div className="container">
        {!tempData ? (
          <NoDataAvailable clickHandler={clickHandler} inputHandler={inputHandler}/>
        ) : (
          <DataAvailable
            handleSubmit={handleSubmit}
            inputHandler={inputHandler}
            tempData={tempData}
            weatherData={weatherData}
            countryData={countryData}
            cityData={cityData}
            windData={windData}
            date={date}
            inputCity={inputCity}
            fetchWeatherData={fetchWeatherData}
          />
        )}
      </div>
    </>
  );
};

export default TempApp;
