import React from 'react';
import LoginInput from './LoginInput';
import PasswordInput from './PasswordInput';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      login: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }) //estado generico para funcionar em todos os inputs.
  }

  handleSubmit = (e) => {
    e.preventDefault(); //Mantem os dados na tela apos o submit do botao
    alert('Login Funcionou');
  }

  render() {
    return (
      <section className="login-form">
        <h1>Login</h1>
        <form onSubmit={ this.handleSubmit }>
          <LoginInput loginValue={ this.state.login } onChangeInput={ this.handleChange } />
          <PasswordInput passwordValue= { this.state.login } onChangeInput={ this.handleChange } />
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;