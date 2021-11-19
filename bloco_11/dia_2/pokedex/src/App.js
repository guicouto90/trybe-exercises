import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>POKEMONS</h1>
        <Pokedex pokemonData={ pokemons } />
      </main>
    );
  }
}
export default App;
