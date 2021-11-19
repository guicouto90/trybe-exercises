import React from 'react';

class PasswordInput extends React.Component {
  /*validatePassword = (email) => {
    const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if(!isValid || email.length === 0) {
      return 'Invalid email';
    }
    return '';
  }*/
  render() {
    const { value, onChange } = this.props;
    return(
      <label htmlFor="password">
        Password:
        <input type="password" name="password" id="password" value ={ value } onChange={ onChange } />
      </label>
    );
  }
}

export default PasswordInput;
