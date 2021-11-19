import './App.css';
import React from 'react';
import catalog from './data';
import Serielist from './components/Serieslist';

class App extends React.Component {
  render() {
    return (
      <main>
        <Serielist catalogData={ catalog }/>
      </main>

    );
  }
}
export default App;
