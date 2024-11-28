import React, { useState } from 'react';
import './App.css';
import PokemonsList from './components/PokemonsList';
import PokemonPage from './components/PokemonPage';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleBackToList = () => {
    setSelectedPokemon(null);
  };

  return (
    <div>
      {!selectedPokemon ? (
        <PokemonsList onPokemonClick={handlePokemonClick} />
      ) : (
        <PokemonPage pokemon={selectedPokemon} onBackToList={handleBackToList} />
      )}
    </div>
  );
}

export default App;
