import express from 'express';
import weatherController from './controllers/weatherController.js';

/**
 * Routes é o intermediário entre o front e o controller
 * Routes recebe as requisições do front e manda para o controller
 * recebe do controller a resposta e manda para o front
 * Seta os endpoints e chama o controller para processar a lógica de negócio
 * e depois retorna a resposta para o front
 * Parametros: req e res, req vem do front, res é o que vamos enviar para o front
 */

const router = express.Router();
const controller = new weatherController();

router.get('/clima', (req, res)=>{
    controller.getWeatherByCity(req, res);
});

router.get('/sugestoes', (req, res)=>{
    controller.getSuggestedCities(req, res);
})

export default router;

