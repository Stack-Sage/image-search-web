// src/components/Search.jsx
import React, { useState } from 'react';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';

const Search = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(searchTerm);
    }
  };

  return (
    <div className="search-container">
      <PlaceholdersAndVanishInput
        placeholders={['Search...', 'Type here...']}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Search;
