import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder='Search Monsters'
      onChange={handleChange}
    />
  );
};

export default SearchBox;
