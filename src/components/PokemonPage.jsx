import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PokemonPage({ pokemon, onBackToList }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios.get(pokemon.url)
      .then((response) => {
        setPokemonDetails(response.data);
      })
      .catch((error) => console.error('Error fetching pokemon details:', error));
  }, [pokemon]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card">
        <h1>{pokemonDetails.name}</h1>
        <img
          src={pokemonDetails.sprites.front_default}
          alt={pokemonDetails.name}
        />
        <p>Height: {pokemonDetails.height}</p>
        <p>Weight: {pokemonDetails.weight}</p>
        <h3>Abilities:</h3>
        <ul>
          {pokemonDetails.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>

        {/* Кнопка для возврата на список */}
        <button onClick={onBackToList}>Back to list</button>
      </div>
    </div>
  );
}

export default PokemonPage;
