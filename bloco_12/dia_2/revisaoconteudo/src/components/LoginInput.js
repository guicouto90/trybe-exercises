import React from 'react';

class LoginInput extends React.Component {
  validateEmail = (email) => {
    const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!isValid || email.length === 0) {
      return 'invalid email';
    }
    return '';
  }
  render() {
    const { loginValue, onChangeInput } = this.props
    return (
      <label htmlFor="login">
          <input 
            type="text" 
            id="login" 
            name="login" 
            onChange={ onChangeInput }
            value={ loginValue }
           />
         <span className="form-error">{ this.validateEmail(loginValue) }</span>
      </label>
    );
  }
}

export default LoginInput;
