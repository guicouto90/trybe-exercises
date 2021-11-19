import React from 'react';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App';

describe('Movie List', () => {
  test("Renderiza 'Carregando...' quando inicia a aplicação", () => {
    const { getByText } = render(<App />); // pega a propriedade getByText do render do App;

    expect(getByText('Carregando...')).toBeDefined(); //Testa se aparece Carregando, quando a pagina está renderizando.
  });

  test('Exibe o primeiro filme', async () => {
    const { getByText } = render(<App />); // pega a propriedade getByText do render do App;

    await waitForElementToBeRemoved(() =>  //funcao assincrona 
       screen.getByText('Carregando...'), { timeout: 3000 }// pega tudo que está renderizando na tela.
    );
    
    expect(screen.getByText('Kingsglaive')).toBeDefined();
  });

  test('Renderiza a pagina de detalhes ao clicar em "Ver Detalhes"', async () => {
    render(<App />);
    await waitForElementToBeRemoved(() =>  //funcao assincrona 
       screen.getByText('Carregando...'), { timeout: 3000 }// pega tudo que está renderizando na tela.
    );

    const buttonDetails = screen.getByTestId('KingsglaiveDetails');
    fireEvent.click(buttonDetails);
    expect(screen.queryByText(/genre/i)).toBeDefined();
  })
});
