import React, { useState, useEffect } from 'react';

const Header = ({ searchedCity, error }) => {
  const [lastValidCity, setLastValidCity] = useState('');

  useEffect(() => {
    if (!error && searchedCity) {
      setLastValidCity(searchedCity); // Update only when no error
    }
  }, [searchedCity, error]);

  return (
    <div className='Header'>
      {!error && lastValidCity ? `${lastValidCity} Weather Forecast` : 'Weather Forecast'}
    </div>
  );
};

export default Header;
