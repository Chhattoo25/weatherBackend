const {Router} = require('express');
const { getWeather } = require('../controllers/currWeather');

const WeatherRouter = Router()

// WeatherRouter.get('/getweather',getWeather)
WeatherRouter.get('/getweather', getWeather)
module.exports={
WeatherRouter
}