import React from 'react';
import './Searchbar.css';
import { useState } from 'react';

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="searchBar">
      <input
        placeholder="Procure por produtos, marcas ou nomes..."
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
      ></input>
      <img
        src="https://i.imgur.com/NT6RL9r.jpg"
        alt="search icon"
        id="searchIcon"
      ></img>
    </div>
  );
}
