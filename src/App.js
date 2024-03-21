import React, { useState, useEffect} from 'react';
import './App.css';
import './style.css';
 
function App() {
 
  const [pokemon, setPokemon] = useState(null);
 
  function loadAPI() {
    let url = "https://pokeapi.co/api/v2/pokemon/pikachu";
    fetch(url)
      .then(response => response.json())
      .then(res => {
        console.log(res);
        setPokemon(res);
      })
      .then(err => {
        console.log(err);
      });
  }
 
  useEffect(() => {

    loadAPI();

  }, []);
 
  return (
    <div className='Container'>
      <header>
        <strong>Pokemon API</strong>
      </header>
    
      {pokemon && (
      <div>
        
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div>Nome: {pokemon.name}</div>
        <div>N° {pokemon.id}</div>
        <div>Peso: {pokemon.weight / 10}kg</div>
        <div>Altura: {pokemon.height / 10}m</div>
      </div>
      )}
    </div>  
  );
}
 
export default App;