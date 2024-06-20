
import React from 'react';

const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(pokemon)}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;