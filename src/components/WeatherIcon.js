import React from 'react'

function WeatherIcon(props) {
    const iconSrcPath = `weather-icons/${props.icon}.png`
     
    return (
        <img className="weather-icon" src={iconSrcPath} alt=""></img>
    )
}

export default WeatherIcon;