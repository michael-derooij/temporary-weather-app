import axios from "axios";

const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY

function weatherRequestById(cityId, units="metric") {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=${units}`)
}

function weatherRequestByName(cityName, units="metric") {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`)
}

export { weatherRequestById, weatherRequestByName }