import React from 'react';
import { format } from 'date-fns';

const Content = ({ city, weatherData, setCity, isLoading, error }) => {
  const currentDate = format(new Date(), 'eeee, MMM dd');
  const temp = weatherData ? weatherData.main.temp : null;
  const weatherDescription = weatherData ? weatherData.weather[0].description : '';
  const cityName = weatherData ? weatherData.name : '';

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Content">
      <p>{currentDate}</p> {/* Display the formatted date */}

      {/* City search input */}
      <form className="city-name" onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Search City"
          className="search-input"
        />
        <button type="submit">Search</button>
      </form>

      {/* Display weather information if available */}
      {weatherData ? (
        <div>
          <h2>{cityName}</h2>
          <p>{weatherDescription}</p>
          <p>Temperature: {temp}°C</p>
        </div>
      ) : (
        !isLoading && !error && <p>No weather data available</p> // Only show if no data and no loading or error
      )}
    </div>
  );
}

export default Content;
