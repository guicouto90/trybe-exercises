import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

class App extends React.Component {
  render() {
    return (
      <main className ="App">
        <LoginForm />
        <RegistrationForm />
      </main>
    );
  }
}
export default App;
