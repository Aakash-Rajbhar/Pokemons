// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
      const pokemonData = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const pokemonRecord = await axios.get(pokemon.url);
          return pokemonRecord.data;
        })
      );
      setPokemons(pokemonData);
    };
    fetchPokemons();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleBackClick = () => {
    setSelectedPokemon(null);
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.includes(search)
  );

  return (
    <div className="app">
      <h1>Pokemon List</h1>
      <input
        type="text"
        placeholder="Search Pokemon"
        onChange={handleSearch}
        className='search'
      />
      {selectedPokemon ? (
        <PokemonDetail pokemon={selectedPokemon} onBack={handleBackClick} />
      ) : (
        <PokemonList pokemons={filteredPokemons} onClick={handleCardClick} />
      )}
    </div>
  );
};

export default App;
