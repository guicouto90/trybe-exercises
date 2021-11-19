import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemonData } = this.props;
    return (
      pokemonData.map((pokemon) => <Pokemon key={ pokemon.id } pokemonInfo={ pokemon } />)
    );
  }
}

export default Pokedex;
