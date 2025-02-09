import React, { useEffect } from 'react';
import { FaSun, FaCloud, FaSnowflake, FaCloudRain } from 'react-icons/fa';

const CityWeather = ({ weatherData, isLoading, error, setSearchedCity }) => {
  useEffect(() => {
      if (weatherData) {
          setSearchedCity(weatherData.name);
      }
  }, [weatherData, setSearchedCity]);

  if (isLoading) {
      return <p style={{ textAlign: 'center', fontSize: '20px' }}>Loading...</p>;
  }

  if (error) {
      return (
          <p style={{
              color: 'red',
              fontSize: '25px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '20px',
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              padding: '10px',
              borderRadius: '5px'
          }}>
              City Not Found
          </p>
      );
  }

  if (!weatherData) return null; // Avoids rendering issues

  const temp = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;
  const windSpeed = weatherData.wind.speed;
  const humidity = weatherData.main.humidity;
  const sunrise = new Date(weatherData.sys.sunrise * 1000);
  const sunset = new Date(weatherData.sys.sunset * 1000);
  const rain = weatherData.rain ? weatherData.rain["1h"] : 0;
  const cityName = weatherData.name;

  const getWeatherIcon = (temperature) => {
      if (temperature >= 30) return <FaSun className="weather-icon hot" />;
      if (temperature >= 20) return <FaCloud className="weather-icon warm" />;
      if (temperature >= 10) return <FaCloudRain className="weather-icon cool" />;
      return <FaSnowflake className="weather-icon cold" />;
  };

  return (
      <div className="weather-container">
          <h2 style={{ fontSize: "45px", fontWeight: "bold" }}>{cityName}</h2>
          <div className='tempValue'>
              {getWeatherIcon(temp)}
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