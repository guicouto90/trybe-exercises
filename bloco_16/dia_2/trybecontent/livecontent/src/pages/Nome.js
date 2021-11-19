
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input, Button } from '../components';
import './Nome.css';
import { actionChangeName } from '../redux/actions'
class Nome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
    }
  }

  handleInput = ({target: {value}}) => {
    console.log('digitou...')
   this.setState({ nome: value })
  }

  handleNextPage = () => {
    const {changeName} = this.props
    const { nome } = this.state
    changeName(nome)
  }

  render() {
    const { nome } = this.state
    
    //console.log(this.props)
    return (
      <div className="nome">
        <h1>Digite um nome:</h1>
        <Input value={ nome } onChange={this.handleInput} />
        <Button label="Próxima" to={ "/preferencia"} onClick={this.handleNextPage} />
      </div>
    );
  }
}


//param1 => LER DA STORE
//param2 => ESCREVER NA STORE

//dipatch => manda ações para reducer
const mapDipatchToProps = (dispatch) => {
  return {
    changeName: (value) => dispatch(actionChangeName(value))
  }
}

export default connect(null,mapDipatchToProps)(Nome);