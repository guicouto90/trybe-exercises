import './App.css';
import React from 'react';

class App extends React.Component {
  Task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  render() {
    const array = ['Acordar as 6', 'Meditar', 'Treinar', 'Cagar', 'Morning Call', 'Operar Dolar'];  
    return (
      <div>
        { array.map((arr) => this.Task(arr)) }
      </div>
    );
  }
}

export default App;

