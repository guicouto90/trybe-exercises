import React from 'react';
import './App.css';
import colors from './data'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      inputValue: '', // valor inicial do input
    }

    this.handleChange = this.handleChange.bind(this); // faz a funcao funcionar no escopo como um todo

  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {colors
          .filter((color) => color.name.includes(this.state.inputValue)) // filtra as cores de acordo com o que esta escrito o inpput
          .map((color) => <li key={color.hex}><div className="square-color" style={ {background: color.hex} }></div>{color.name}</li>)}
        </ul>
        <label htmlFor="search">
          <input type="text" id="search" onChange={this.handleChange}/>
        </label>
      </div>
    )
  }
}

export default App;
