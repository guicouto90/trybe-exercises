import React, { Component } from 'react';
import { Radio, Button } from '../components';
import {connect} from 'react-redux'
import { actionChangePreference } from '../redux/actions';
import './Preferencia.css';

class Preferencia extends Component {
  constructor(props) {
    super(props);
    this.state= {
      preferencia: 'bolacha',
    }
  }

  handleRadioChange = ({target: {value}}) => {
    this.setState({ preferencia: value })
  }

  render() {
    const { preferencia } = this.state;
    console.log(this.props)
    const { changePreference } = this.props
    return (
      <div className="preferencia">
        <h1>Escolha o certo:</h1>
        <div className="options">
          <Radio label="Biscoito" id="biscoito" htmlFor="biscoito" value="biscoito" onChange={this.handleRadioChange}/>
          <Radio label="Bolacha" id="bolacha" htmlFor="bolacha" value="bolacha" onChange={this.handleRadioChange} />
        </div>
        <Button label="Próxima" to={ {pathname: "/comida"}} onClick={()=>{changePreference(preferencia)}}/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    nome: state.nome
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePreference: (value) => dispatch(actionChangePreference(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preferencia);