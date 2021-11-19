import React from 'react';
import './App.css';
import colors from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inputValue: '',
    }

    this.handleChange = this.handleChange.bind(this); //Faz a funçao nao ser mais UNDEFINED para aplicacao toda. Deixa o conteudo disponivel para aplicacao.
                                                      // Se fizer a funcao via arrowFunction nao precisa fazer o Bind.
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <ul>
          { colors
          .filter((color) => color.name.includes(inputValue)) //compara se color.name inclue o valor digitado no inputValue, para comparar.
          .map((color) => 
            <li key={ color.hex }>
              <div className="square-color" style={ { background: color.hex }}> {/* mexe na propriedade style do arquivo para mudar a propriedade background*/}
              </div>{ color.name }
            </li>) 
          }
        </ul>
        <label htmlFor="texto">
          <input type="text" id="texto" onChange={ this.handleChange } />
        </label>
      </div>
    );
  }
}


export default App;
