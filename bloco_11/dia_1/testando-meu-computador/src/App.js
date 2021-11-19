import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './App.css';

class App extends Component {
  render() {
    const element = (
      <h1>Hello World!!</h1>
    )
    return (
      <div className="hello-world">
        {element}
        <p>Esse é o meu primeiro App React</p>
        <HelloWorld />
      </div>
    );
  }
}

export default App;