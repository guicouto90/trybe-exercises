import React from 'react';

class PasswordInput extends React.Component {
  render() {
    const { passwordInput, onChangeInput } = this.props
    return (
      <label htmlFor="password">
          <input 
            type="password" 
            id="password" 
            name="password" 
            onChange={ onChangeInput }
           value={ passwordInput }
          />
      </label>
      
    );
  }
}

export default PasswordInput;
