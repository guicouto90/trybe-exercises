import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from '../components/Header';

describe('App.js tests', () => {
  test('Renderiza as paginas "sobre mim" e "projetos"', () => {
    renderWithRouter(<App />);
    
    const h1Home = screen.getByRole('heading', {
      name: /página sobre mim/i,
      level: 1,
    });
    expect(h1Home).toBeInTheDocument();

    const projectLink = screen.getByRole('link', {
      name: /projetos/i,
    });
    userEvent.click(projectLink)

    const projectText = screen.getByRole('heading', {
      name: /página de projetos/i,
      level: 1,
    });
    expect(projectText).toBeInTheDocument();
  });

  test('Renderizando o Header', () => {
    renderWithRouter(<Header />)
  });

  test('Renderiza mensagem de "Pagina nao encontrada"', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/rotanadaave');

    const notFoundText = screen.getByRole('heading', {
      name: /página não encontrada/i,
      level: 1,
    });
    expect(notFoundText).toBeInTheDocument();
  });

  test('Entra na pagina de comentarios /comments e deixa um comentario', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comments'); //redireciona pra pagina comments,
    
    const commentsText = screen.getByRole('heading', {
      name: /comente/i,
      level: 1,
    });
    
    expect(commentsText).toBeInTheDocument();

    const inputText = screen.getByRole('textbox');
    userEvent.type(inputText, 'alguma coisa');

    const buttonComment = screen.getByRole('button', {
      name: /add comment/i,
    })
    userEvent.click(buttonComment);

    const listItem = screen.getByText(/alguma coisa/i);

    expect(listItem).toBeInTheDocument();

  })
})