import React, { Component } from 'react'
import TopBar from './TopBar'
import WeatherGrid from './WeatherGrid'
import './Main.css'
import { weatherRequestByName } from './../utils/OpenWeatherAPI'

class Main extends Component {
    constructor() {
        super()

        this.state = {
            citiesIds: [],
            citiesData: []
        }
    }

    onSearchInputChange = input => {
        this.setState({
            searchInput: input
        })
    }

    onSearch = input => {
        if (input !== "") {
            weatherRequestByName(input)
            .then(response => {
                if (!this.state.citiesIds.includes(response.data.id)) {
                    const newCitiesIds = this.state.citiesIds.concat(response.data.id)
                    const newCitiesData = this.state.citiesData.concat(response.data)
                    this.setState({
                        citiesIds: newCitiesIds,
                        citiesData: newCitiesData
                    })
                }
            })
            .catch(error => {
                if (error.response !== undefined) {
                    if (error.response.status === 404) {
                        console.log("OpenWeaterMap: One or more inputs are invalid")
                    }
                } else {
                    console.log(error)
                }
            })
        }
    }

    render() {
        return (
            <div>
                <TopBar 
                    onSearch={this.onSearch}
                />
                <div className="content">
                    <WeatherGrid citiesData={this.state.citiesData} />
                </div>
            </div>
        )
    }
}

export default Main;
