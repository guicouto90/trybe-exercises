import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

const renderWithRedux = (component, initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
  );

  return {
    ...render(
      <Provider store={ store }>
        {component}
      </Provider>,
    ),
    store,
  };
};

export default renderWithRedux;