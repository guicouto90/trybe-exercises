import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="nome">
          <input type="text" id="nome" maxLength="40" />
        </label>
      </fieldset>
    );
  }

}

export default App;
