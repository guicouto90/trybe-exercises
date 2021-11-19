import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemonInfo } = this.props;  
    return (
      <main>
        <h2> Nome: { pokemonInfo.name }</h2>
        <p> Tipo: { pokemonInfo.type }</p>
        <p> Peso: { pokemonInfo.averageWeight.value }{pokemonInfo.averageWeight.measurementUnit}</p>
        <img src={ pokemonInfo.image } alt={ pokemonInfo.name }/>
      </main>
    );
  }
}

export default Pokemon;
