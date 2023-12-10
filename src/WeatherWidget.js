import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.weather.gov/points/32.8801,-117.2340');
        const data = await response.json();
        const forecastUrl = data.properties.forecast;
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        setWeatherData(forecastData.properties.periods[0]);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.temperature} {weatherData.temperatureUnit}</p>
          <p>Conditions: {weatherData.shortForecast}</p>
          {/* Additional weather information */}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
