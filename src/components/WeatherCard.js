import React from 'react'
import WeatherIcon from './WeatherIcon'
import WeatherDataItem from './WeatherDataItem'
import './WeatherCard.css'

function WeatherCard(props) {
  const d = props.cityData

  let iconName = d.weather[0].icon
  if (iconName.substring(0, 2) !== "01") {
    iconName = iconName.substring(0, 2)
  }

  const feelsLikeValue = `${d.main.feels_like.toFixed(1)} °C`

  return (
    <div className="weather-card">
      <div className="location">
        <span className="country-name">{d.sys.country}</span>
        <span className="city-name">{d.name}</span>
      </div>
      <div className="card-first-row">
        <WeatherIcon icon={iconName} />
        <span className="temperature-large">{d.main.temp.toFixed(1)} °C</span>
        <WeatherDataItem name="Feels like" value={feelsLikeValue} />
      </div>
      <div className="weatheritem-item-grid">

      </div>
    </div>
  )
}

export default WeatherCard;
