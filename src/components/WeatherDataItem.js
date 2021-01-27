import React from 'react'
import './WeatherDataItem.css'

function WeatherDataItem(props) {
    return (
        <div className="weatherdata-item">
          <span className="weatherdata-name">{props.name}</span>
          <span className="weatherdata-value">{props.value}</span>
        </div>
    )
}

export default WeatherDataItem;