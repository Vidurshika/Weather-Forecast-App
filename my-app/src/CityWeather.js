import React from 'react';
import { FaSun, FaCloud, FaSnowflake, FaCloudRain } from 'react-icons/fa'; // Import weather icons

const CityWeather = ({ weatherData, isLoading, error }) => {
  if (!weatherData) return (!isLoading && !error) ? <p>No weather data available</p> : null;

  const temp = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;
  const windSpeed = weatherData.wind.speed;
  const humidity = weatherData.main.humidity;
  const sunrise = new Date(weatherData.sys.sunrise * 1000); // Convert from UNIX timestamp
  const sunset = new Date(weatherData.sys.sunset * 1000); // Convert from UNIX timestamp
  const rain = weatherData.rain ? weatherData.rain["1h"] : 0;
  const cityName = weatherData.name;

  // Function to select an icon based on temperature
  const getWeatherIcon = (temperature) => {
    if (temperature >= 30) {
      return <FaSun className="weather-icon hot" />;  // 🌞 Hot weather
    } else if (temperature >= 20) {
      return <FaCloud className="weather-icon warm" />;  // ☁️ Warm/Cloudy
    } else if (temperature >= 10) {
      return <FaCloudRain className="weather-icon cool" />;  // 🌧️ Rainy
    } else {
      return <FaSnowflake className="weather-icon cold" />;  // ❄️ Cold weather
    }
  };

  return (
    <div className="weather-container">
      <h2 style={{ fontSize: "45px", fontWeight: "bold" }}>{cityName}</h2>
      <div className='tempValue'>
        {getWeatherIcon(temp)}  {/* Display icon based on temperature */}
        <p style={{ fontSize: "45px", fontWeight: "bold" }}>{temp}°C</p>
      </div>
      <div className='Description'>
            <p>{weatherDescription}</p>
            <p>Wind Speed: {windSpeed} m/s</p>
            <p>Humidity: {humidity}%</p>
            <p>Rain: {rain} mm</p>
            <p>Sunrise: {sunrise.toLocaleTimeString()}</p>
            <p>Sunset: {sunset.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default CityWeather;
