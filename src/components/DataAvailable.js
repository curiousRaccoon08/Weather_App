import React from "react";

const DataAvailable = ({
  handleSubmit,
  inputHandler,
  tempData,
  weatherData,
  countryData,
  cityData,
  windData,
  date,
  inputCity,
  fetchWeatherData,
}) => {
  const { year, months, month, weekDay, day } = date;
  const currentMonthShort = months[month.number - 1];

  return (
    <>
      <div className="weather-side">
        <div className="weather-gradient"></div>
        <div className="date-container">
          <h2 className="date-dayname">{weekDay.name}</h2>
          <span className="date-day">
            {day} {currentMonthShort.shortName} {year}
          </span>
          <i className="fa fa-map-marker location-icon" aria-hidden="true"></i>
          <span className="location">
            {cityData.name}, {countryData.country}
          </span>
        </div>
        <div className="weather-container">
          <h1 className="weather-temp">{tempData.temp}°C</h1>
          <h3 className="weather-desc">{weatherData.main}</h3>
        </div>
      </div>
      <div className="info-side">
        <div className="today-info-container">
          <div className="today-info">
            <div className="humidity">
              {" "}
              <span className="title">HUMIDITY</span>
              <span className="value">{tempData.humidity} %</span>
              <div className="clear"></div>
            </div>
            <div className="wind">
              {" "}
              <span className="title">WIND</span>
              <span className="value">{windData.speed} m/s</span>
            </div>
          </div>
        </div>
        <div className="week-container">
          <ul className="week-list">
            <li className="active">
              <span className="day-name">Max</span>
              <span className="day-temp">{tempData.temp_max}°C</span>
            </li>
            <li>
              <span className="day-name">Min</span>
              <span className="day-temp">{tempData.temp_min}°C</span>
            </li>
            <div className="clear"></div>
          </ul>
        </div>
        <div className="location-container">
          <form onSubmit={handleSubmit}>
            <input
              className="location-search"
              type="text"
              value={inputCity}
              placeholder="Enter City Name..."
              onChange={(e) => inputHandler(e.target.value)}
            />
            <button
              className="location-button"
              onClick={() => fetchWeatherData(inputCity)}
            >
              <span>Change location</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DataAvailable;
