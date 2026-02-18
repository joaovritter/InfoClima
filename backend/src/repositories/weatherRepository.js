import axios from 'axios';

const apiKey = process.env.API_KEY;

class WeatherRepository {
    async getWeatherByCity(cityName) {

        const encodedCity = encodeURIComponent(cityName);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}&units=metric&lang=pt_br`;

        const response = await axios.get(url);
        return response.data;
    }


    async getSuggestedCities(partialName) {
        const encodedName = encodeURIComponent(partialName);
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodedName}&limit=5&appid=${apiKey}`;

        const response = await axios.get(url);
        return response.data;
    }
}
export default WeatherRepository;


