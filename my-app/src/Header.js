import React from 'react'

const Header = ({ city }) => {
  return (
    <div className='Header'>
      {city ? `${city} Weather Forecast ` : 'Weather Forecast'}
    </div>
  )
}

export default Header;
