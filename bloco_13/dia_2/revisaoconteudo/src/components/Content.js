import React from 'react';
import { Switch, Route } from 'react-router-dom'; //Caso 1: , Caso2: , e etc... mesmo switch de logica de programaçao. E o Route faz a rota entre o path e o compoennte do React.
import Calendar from '../pages/Calendar';
import LiveLectures from '../pages/LiveLectures';
import TrybeTalks from '../pages/TrybeTalks';
import Solutions from '../pages/Solutions';
import Solution from '../pages/Solution';

class Content extends React.Component {
  constructor() {
    super();

    this.state = {
      solutions: [
        {
          id: 'hello-world-no-react',
          name: '11.1 - Hello World no React'
        },
        {
          id: 'components-react',
          name: '11.2 - Components React'
        },
      ]
    }
  }

  render() {
    return (
      <main className="Content">
        <Switch>
          <Route path="/calendar" component={ Calendar } />
          <Route path="/live-lecture" component={ LiveLectures } />
          <Route path="/trybe-talks" component={ TrybeTalks } />
          <Route 
            exact path="/solutions" 
            render={ (propsReactRouter) => <Solutions { ...propsReactRouter } solutions={ this.state.solutions } /> /* Com o render eu consigo chamar components para utilizar props, states e etc. Faz parte da propriedade do ROUTE */ 
           /*A callback é passada nesse caso do render, pq automaticamente o render gera alguns objetos na props, que podem ser utilizadas na renderizacao do componente, como match.history, path entre outras.*/
           /* No caso do propsREactRouter, poderia ser usado qualquer outro nome, e no caso ali do spread no objeto, faz com que todos os objetos dentro do match, sejam passados pro componente que esta sendo renderizado. */ }  
          />
          <Route path="/solutions/:exerciseId" component={ Solution } />
        </Switch>
      </main>
    );
  }
}

export default Content;