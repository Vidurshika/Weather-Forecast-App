import './App.css';
import Header from './Header';
import CityName from './CityName';
import CityWeather from './CityWeather';
import Footer from './Footer';
import axios from 'axios';
import { useState,useEffect } from 'react';


function App() {

  const [city,setCity]=useState('London');
  const [searchedCity,setSearchedCity] =useState('');
  const [weatherData,setWeatherData] =useState();
  const [isLoading, setIsLoading] = useState(true);  // Add isLoading state
  const [error, setError] = useState(null);  // Add error state
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
  
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
  
        if (response.data.cod === "404") {
          setError("City not found. Please check the name and try again.");
        } else {
          setWeatherData(response.data); // Update only when data is valid
          setSearchedCity(city); // Update searched city only if the data is valid
        }
      } catch (err) {
        setError(err.message);
        console.log("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };
  
    if (city) {
      fetchData();
    }
  }, [city]);
    // Dependency array
   /* re render for each City */

  

  return (
    <div className="App">

      <Header
       searchedCity={searchedCity}
       error={error}
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
        setSearchedCity={setSearchedCity}
        />
      </div>
      <Footer/>

      
    </div>
  );
}

export default App;
