import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Animal, Comida, Manchete, Nome, Preferencia } from './pages';
import { Provider } from 'react-redux'
import store from './redux'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Nome } />
            <Route path="/preferencia" component={ Preferencia } />
            <Route path="/comida" component={ Comida } />
            <Route path="/animal" component={ Animal } />
            <Route path="/manchete" component={ Manchete } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
