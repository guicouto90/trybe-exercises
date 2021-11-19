import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react'

describe('App.js teste', () => {
  test('Teste conjunto fixo de links', () => {
    render(<App />);
    
    const homeLink = screen.getByRole('link', {
      name: '/',
    });
    expect(homeLink).toBeInTheDocument();
  });
})
