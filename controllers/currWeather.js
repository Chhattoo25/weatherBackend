const { WeatherModel } = require("../models/WeatherModel");
const axios = require("axios");

getWeather = async (req, res) => {
  const location = req.query.location;
  console.log(location, "location");

  try {
    const apiKey = 'f4e43d56ca19dd3889d6ee56566e99b2'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4db79c80a0011b0ac1f770080f67bb2d&units=metric`;
    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    console.log(weatherData, "controller");

    // Creating new data
    const weather = new WeatherModel({
      location: weatherData.name,
      temperature: weatherData.main.temp,
      humidity: weatherData.main.humidity,
    });

    // Save the data in the database
    await weather.save();

    // Send data to the client
    res.json(weatherData);
  } catch (error) {
    // Error handling
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  getWeather,
};
