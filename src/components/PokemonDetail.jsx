import React from 'react';

const PokemonDetail = ({ pokemon, onBack }) => {
  return (
    <div className="pokemon-details">
      <button onClick={onBack}>Back</button>
      <h2 className='poke-name'>{pokemon.name}</h2>
      <div className="pokemon-details-list">
      <p className='poke-info'>Height: {pokemon.height}</p>
      <div className='poke-image'>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p className='poke-info'>Weight: {pokemon.weight}</p>
      </div>
      <p className='poke-info'>Base Experience: {pokemon.base_experience}</p>
      </div>
      <h3 className='h3'>Abilities:</h3>
      <ul className='abilities'>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetail;
