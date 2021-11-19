import React from 'react';

class Cronometer extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      seconds: 0,
    };
  }

  componentDidMount() { //executa quando o componente é montado. API Sempre é chamada nesse metodo.
    const ONE_SECOND = 1000;
    this.cronometerInterval = setInterval(() => { //Seta o intervalo de execuçao de algo. Nesse caso a cada 1 segundo.
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, ONE_SECOND);
  }

  componentDidUpdate(prevProps, prevState) {
    const MAX_SECOND = 30;
    if (prevState.seconds === MAX_SECOND) { //Compara o estado Atual do seconds se é igual ao maximo de segundos, e se for aparece um alert na tela, e em seguida o setState, seta o estado para 0 segundos novamente.
      alert('ACABOU O TEMPO!')
      this.setState({ seconds: 0 }); //Variavel seconds volta ao estado inicial de 0;
    }
  }

  componentWillUnmount() {
    clearInterval(this.cronometerInterval); //Limpa o intervalo do 
  }

  render() {
    const { seconds } = this.state;
    return (
      <h2>
        { seconds }
      </h2>
    );
  }
}

export default Cronometer;
