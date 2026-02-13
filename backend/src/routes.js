import express from 'express';
import weatherController from './controllers/weatherController.js';


const router = express.Router();
const controller = new weatherController();

router.get('/clima', (req, res)=>{
    controller.getWeatherByCity(req, res);
});

router.get('/sugestoes', (req, res)=>{
    controller.getSuggestedCities(req, res);
})

export default router;

