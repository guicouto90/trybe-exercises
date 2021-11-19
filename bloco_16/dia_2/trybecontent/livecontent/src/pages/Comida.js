import React, { Component } from 'react';
import { Button } from '../components';
import './Comida.css';

class Comida extends Component {
  constructor(props) {
    super(props);
    const { nome, preferencia } = this.props.location.state;
    this.state= {
      nome,
      preferencia,
      comida: '',
    }
  }
  
  handleFoodChange = ({target:{value}}) => {
    this.setState({ comida: value })
  }

  render() {
    const { nome, preferencia, comida } = this.state;
    return (
      <div className="comida">
        <h1>Escolha o pior:</h1>
        <div className="comida-opcoes">
          <Button className={ comida === 'açaí' ? 'escolhida' : 'opcao' } label="Açaí" value="açaí" onClick={ this.handleFoodChange } />
          <Button className={ comida === 'sushi' ? 'escolhida' : 'opcao' } label="Sushi" value="sushi" onClick={ this.handleFoodChange } />
          <Button className={ comida === 'sopa' ? 'escolhida' : 'opcao' } label="Sopa" value="sopa" onClick={ this.handleFoodChange } />
        </div>
        <Button label="Próxima" to={{ pathname: "/animal", state: { nome, preferencia, comida } }} />
      </div>
    );
  }
}

export default Comida;