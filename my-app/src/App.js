import './App.css';
import Header from './Header';
import CityName from './CityName';
import CityWeather from './CityWeather';
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
        if (response.data.cod === "404") {
          // City not found
          setError("City not found. Please check the name and try again.");
          setWeatherData(null);
        } else {
          setWeatherData(response.data);  // Store weather data
          setError(null); // Reset any previous error messages
        }
        setIsLoading(false);  // End loading
      } catch (err) {
        setIsLoading(false);  // End loading even if there's an error
        setError(err.message);  // Set the error message
        console.log('Error fetching data:', err);
      }
    };
  
    if (city) {
      fetchData();
    }
  }, [city]);  // Dependency array
   /* re render for each City */

  

  return (
    <div className="App">

      <Header
       city={city}
      />
      <div className='Content'>
        <CityName
        city={city}
        setCity={setCity}
        />
        <CityWeather
        city={city}
        weatherData={weatherData}
        isLoading={isLoading}
        error={error}
        />
      </div>
      <Footer/>

      
    </div>
  );
}

export default App;
