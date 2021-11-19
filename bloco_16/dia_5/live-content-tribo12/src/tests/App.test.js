import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import { screen } from '@testing-library/dom';

describe('Teste com Redux', () => {
  test('Verifica se existe algum cliente cadastrado', () => {
    const initialState = {
      registerReducer: [],
      loginReducer: {
          email: 'guilherme.couto90@gmail.com',
          password: '123445'
      }
    }
    const initialEntries = ['/clients'];

    const { history, store } = renderWithRouterAndRedux(<App />, initialState, initialEntries);

    console.log(history);
    console.log(store.getState);

    const title = screen.getByText(/Nenhum cliente cadastrado/i);
    expect(title).toBeDefined();
  })
})