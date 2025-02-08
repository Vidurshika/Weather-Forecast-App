import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import axios from 'axios';
import { useState,useEffect } from 'react';


function App() {

  const [city,setCity]=useState('');
  const [weatherData,setWeatherData] =useState();
  const [isLoading, setIsLoading] = useState(true);  // Add isLoading state
  const [error, setError] = useState(null);  // Add error state
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);  // Start loading
      setError(null);  // Clear any previous errors
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        setWeatherData(response.data);  // Store weather data
        setIsLoading(false);  // End loading
      } catch (err) {
        setIsLoading(false);  // End loading even if there's an error
        setError(err.message);  // Set the error message
        console.log('Error fetching data:', err);
      }
    };

    fetchData();
  }, [city]);

  return (
    <div className="App">

      <Header/>
      <Content/>
      {isLoading ? (
        <div>Loading...</div>  // Show loading message while fetching data
      ) : error ? (
        <div>Error: {error}</div>  // Show error message if there's an error
      ) : (
        <div>
          <h2>{weatherData?.name}</h2>
          <p>Temperature: {weatherData?.main.temp}°C</p>
          <p>Weather: {weatherData?.weather[0].description}</p>
          <p>Humidity: {weatherData?.main.humidity}%</p>
          <p>Wind Speed: {weatherData?.wind.speed} m/s</p>
        </div>
      )}
      <Footer/>

      
    </div>
  );
}

export default App;
