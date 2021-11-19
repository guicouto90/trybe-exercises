import './App.css';
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { BrowserRouter } from 'react-router-dom'; //Encapsula aplicacao para usar Router no jsx.

class App extends React.Component {
  render() {
    return (
      <BrowserRouter> 
        <Header />
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
