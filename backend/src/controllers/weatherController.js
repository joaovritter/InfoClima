import weatherService from "../services/weatherService.js";


/**
 * Controller recebe requisições do front
 * e chama o serviço para processar a lógica de negócio
 * e depois retorna a resposta para o front
 */
class WeatherController{
    constructor(){
        this.weatherService = new weatherService();
    }
    
    //get weather by city
    //req e res, 
    //req vem do front, res é o que vamos enviar para o front
    async getWeatherByCity(req, res){
        try {
            const city = req.query.city
            const data = await this.weatherService.getWeatherByCity(city);
            res.status(200).json(data);

        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }

    async getSuggestedCities (req, res){
        try {
            const city = req.query.city;
            const data = await this.weatherService.getSuggestedCities(city);

            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
    
}
export default WeatherController;