import React from "react";
import "./App.css";
import lampOn from './public/lampada _acessa.png'
import lampOff from './public/lampada_apagada.png'
import interruptor from './public/interruptor.png'

import { actionChangeToDark , actionChangeToLight, actionChangeTheme} from './store'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      theme:'light'
    }
  }
 
  changeTheme = () => {
    const { theme } = this.props.getState();
    const newTheme = theme === 'light' ? 'dark': 'light';
    /* this.setState({theme:newTheme}) */
    return newTheme;
  }

  handleButton = () => {
    const {dispatch} = this.props
    dispatch(actionChangeTheme(this.changeTheme()));
  };

  handleChangeToDark = () => {
    this.props.dispatch(actionChangeToDark())
  }
  handleChangeToLight = () => {
    this.props.dispatch(actionChangeToLight())
  }

  render() {
    console.log(this.props.getState())
    const { theme } = this.props.getState()
    return (
      <div className={ theme === 'light' ? 'dark warraper': 'light warraper'}>
        <img src={theme === 'light' ? lampOn: lampOff} alt="lampada"/>
        <h1>{theme}</h1>
        <input type="image" alt="interruptor" src={interruptor} onClick={this.handleButton}/>
   
     </div>
   
    );
  }
}
export default App;
