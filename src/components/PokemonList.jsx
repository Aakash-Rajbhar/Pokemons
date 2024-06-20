// src/components/PokemonList.js
import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, onClick }) => {
  return (
    <div className="pokemon-list">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={onClick} />
      ))}
    </div>
  );
};

export default PokemonList;
