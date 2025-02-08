import React, { useState } from 'react';
import { format } from 'date-fns';
import { FaSearch } from 'react-icons/fa'; // Import search icon


const CityName = ({ setCity }) => {
    const [inputValue, setInputValue] = useState('');
    const currentDate = format(new Date(), 'eeee, MMM dd');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(inputValue);
    };

    return (
        <div className="city-search">
            <p className="date">{currentDate}</p> 
            <form className="city-name-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Search City"
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    <FaSearch className="search-icon" />  {/* Add Search Icon */}
                </button>
            </form>
        </div>
    );
}

export default CityName;
