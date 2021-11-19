import React from 'react';
import LoginInput from './LoginInput';
import PasswordInput from './PasswordInput';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert('Login efetuado com sucesso');
  }

  render() {
    const { login, password } = this.state;
    return (
      <section className ="login-form">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <LoginInput value={ login } onChange={ this.handleChange } />
          <PasswordInput value={ password } onChange={ this.handleChange } />
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }
}


export default LoginForm;
