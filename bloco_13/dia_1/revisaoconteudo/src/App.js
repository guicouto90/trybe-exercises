import './App.css';
import React from 'react';
import Cronometer from './components/Cronometer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCronometer: true, //variavel de controle, que mostra ou nao o cronometro na tela.
    };

    this.cronometerOnOffSwitch = this.cronometerOnOffSwitch.bind(this);

  }

  cronometerOnOffSwitch() { //funcao para troca de on e off na variavel showCronometer.
    this.setState((prevState) => ({ showCronometer: !prevState.showCronometer })); //callback prevState(estado atual da variavel), o showCronometer sempre vai receber o valor negado de prevState. Entao se !prevState.showCronometer for false, o showCronometer vai receber true, e vice versa.
  }

  render() {
    const { showCronometer } = this.state;
    return (
      <main className="App">
        <section className="App-header">
          { showCronometer && <Cronometer />} {/*Renderização condicional, quando o showCronometer for verdade, mostrar o cronometo(renderizar o compomente Cronometer), quando for false, nao mostra nada. Usar operador logico &&, quando a condicao for apenas 1 */}
        </section>
        <button
          type="button"
          onClick={ this.cronometerOnOffSwitch /*Troca a funcao no botao de true para false, quando se clica. Se a funcao onClick estivesse passando uma callback.ex: () => this.cronometerOnOffSwitch(), funcionaria tambem. So nao poderia ser this.cronometerOnOffSwitch(), pois executaria a funcao logo que a pagina fosse renderizada, e nao seria possivel utilizar mais depois essa funcao. */}
        >
          { showCronometer ? 'Desligar cronômetro' : 'Ligar cronômetro'} {/*Texto do cronometro(botao)tambem é trocado, com renderizacao condicional. Se a variavel for false, aparece o "Desligar cronometro" e se for true, "Ligar Cronometro" */}
        </button>

        
      </main>

    );
  }
}

export default App;
