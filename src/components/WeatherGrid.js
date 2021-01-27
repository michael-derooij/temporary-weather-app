import React, { Component } from 'react'
import WeatherCard from './WeatherCard'
import './WeatherGrid.css'

class WeatherGrid extends Component {
    render() {
        const citiesData = this.props.citiesData
        const weathercards = citiesData.map((cityData) => <WeatherCard cityData={cityData} />)
        
        return (
            <div className="weather-grid">
                {weathercards}
            </div>
        )
    }
}

export default WeatherGrid;