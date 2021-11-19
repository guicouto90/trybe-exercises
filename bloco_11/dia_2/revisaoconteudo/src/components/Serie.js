import React from 'react';

class Serie extends React.Component {
  render() {
    const { seriesInfo } = this.props;
    return (
      <main>
        <h1>Serie: { seriesInfo.name }</h1>
        <p>Genero: { seriesInfo.genre }</p>
        <img src={ seriesInfo.image }/>
      </main>
      
    );
  }
}

export default Serie;
