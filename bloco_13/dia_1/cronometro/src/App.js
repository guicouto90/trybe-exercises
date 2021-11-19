import React from 'react';
import './App.css';
import Cronometer from './components/Cronometer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCronometer: true };

    this.cronometerOnOffSwitch = this.cronometerOnOffSwitch.bind(this);
  }

  cronometerOnOffSwitch() {
    this.setState((prevState) => ({ showCronometer: !prevState.showCronometer })); //O prevState é a condiçao que chega o estado showCronometer. Se ele for
                                                                                  // for false, modifica para true e vice versa.
  }

  render() {
    const { showCronometer } = this.state;
    return (
      <main className="App">
        <section className="App-header">
          {showCronometer && <Cronometer />} {/*<!–Renderização condicional, quando o showCronometer for true, renderiza o Cronometer(componente)*/}
        </section>

        <button
          type="button"
          onClick={ () => this.cronometerOnOffSwitch() } 
        > {/*callBack sendo chamada no onClick, ela so vai funcionar quando o botao for acionado */}
          { showCronometer ? 'Desligar cronômetro' : 'Ligar cronômetro' } {/*callBack sendo chamada no onClick, ela so vai funcionar quando o botao for acionado 
          e nesse caso especifico faz o texto do botao alterar.*/}
        </button>
      </main>
    );
  }
}

export default App;
