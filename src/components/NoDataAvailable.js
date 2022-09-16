import React from 'react'

const NoDataAvailable = ({clickHandler}) => {
  return (
    <>
    <div className="weather-side">
      <div className="weather-gradient"></div>
      <div className="date-container">
        <h2 className="date-dayname">Invalid City Name...</h2>
        <span className="date-day">
          No Data Available...
        </span>
        <i className="fa fa-map-marker location-icon" aria-hidden="true"></i>
        <span className="location">
          
        </span>
      </div>
      <div className="weather-container">
        <h1 className="weather-temp">NA °C</h1>
        <h3 className="weather-desc"></h3>
      </div>
    </div>
    <div className="info-side">
      <div className="today-info-container">
        <div className="today-info">
          <div className="humidity">
            {" "}
            <span className="title">HUMIDITY</span>
            <span className="value"> NA %</span>
            <div className="clear"></div>
          </div>
          <div className="wind">
            {" "}
            <span className="title">WIND</span>
            <span className="value">NA m/s</span>
          </div>
        </div>
      </div>
      <div className="week-container">
        <ul className="week-list">
          <li className="active">
            <span className="day-name">Max</span>
            <span className="day-temp">NA °C</span>
          </li>
          <li>
            <span className="day-name">Min</span>
            <span className="day-temp">NA °C</span>
          </li>
          <div className="clear"></div>
        </ul>
      </div>
      <div className="location-container">
        <form >
          <input
            className="location-search"
            type="text"
            value=""
            placeholder="Enter City Name..."
          />
          <button
            className="location-button"
            onClick={clickHandler}
          >
            <span>OK</span>
          </button>
        </form>
      </div>
    </div>
  </>
  )
}

export default NoDataAvailable