import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonsList({ onPokemonClick }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => console.error('Error fetching pokemons:', error));
  }, []);

  return (
    <div>
      <h1>Pokemons List</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name} onClick={() => onPokemonClick(pokemon)}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonsList;
