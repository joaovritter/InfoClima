import WeatherRepository from "../repositories/weatherRepository.js";
/**
 * Service lida com os dados ainda brutos do repository
 * Contém regras de negócio, validação, formatação de dados, etc
 * Após tratados, envia os dados para o controller
 */

class WeatherService {
    constructor() {
        this.WeatherRepository = new WeatherRepository();
    }

    
    async getWeatherByCity(cityName) {
        if (!cityName || cityName.trim().length === 0) {
            throw new Error("Cidade Inválida");
        }
        const wheaterCity = this.WeatherRepository.getWeatherByCity(cityName);
        const data = await wheaterCity;
        return {
            cidade: cityName,
            temperatura: data.main.temp,
            sensacaoTermica: data.main.feels_like,
            humidade: data.main.humidity,
            vento: {
                velocidade: data.wind.speed,
                direcao: data.wind.deg
            },
            descricao: data.weather[0].description
        }
    }

    async getSuggestedCities(partialName) {
        //Retornar lista vazia se tiver < 3 caractéres ou se for vazio
        if (!partialName || partialName.trim().length < 3) {
            return [];
        }

        //requisição para API
        const cities = await this.WeatherRepository.getSuggestedCities(partialName);

        //formatar e retornar as sugestões
        return cities.map(city => ({
            nome: city.name,
            estado: city.state,
            pais: city.country
        }))
    }
}

export default WeatherService;