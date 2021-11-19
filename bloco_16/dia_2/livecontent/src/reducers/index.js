import { combineReducers } from 'redux';
import movie from './movie';

const rootReducer = combineReducers({ movie }) //Combinacao de todos os reducers da aplicacao.

export default rootReducer;