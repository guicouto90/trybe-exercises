import React from 'react';
import { connect } from 'react-redux'
import actionSelectMovie from '../actions'

class Sidebar extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const { categories, handleSelectMovie } = this.props

    return (
      <aside>
        {
          categories.map(category => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>{movie.title} was released in {movie.released}
                      <button type="button" onClick={() => handleSelectMovie(movie,category)}>
                        Select
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    )
  }
};

//1º LER 
//RECEBE O STORE COMO PARAMETRO
//RETORNAR UM OBJETO
const mapStateToProps = (state) => {
  return ({
    categories:state.movie.categories //ESTA PEGANDO A PROPRIEDADE CATEGORIES PASSADA PELO REDUX A PARTIR DO MOMENTO QUE SE CONECTA O COMPONENTE COM O REDUX; ELE FAZ A MESMA COISA QUE A PROPS;
  })
}

//2ºESCREVER
//RECEBE O DISPATCH COMO PARAMETRO, PARA ENVIAR AS ACTIONS;
//RETORNA UM OBJETO
const mapDispatchToProps = (dispatch) => {
  return ({
    handleSelectMovie: (movie,category) => dispatch(actionSelectMovie(movie,category)),
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)// Conecta o Sidebar com o Redux; Primeiro Parametro do connect é para ler e o segundo escrever;
//CONNECT ELE ESTA CONECTADO TAMBEM JUNTO A STORE, ELE QUE TRAS AS INFORMAÇOES;