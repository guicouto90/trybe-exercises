import React from 'react';
import { Link } from 'react-router-dom'; //Linka entre as paginas.

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <h4>Curso</h4>
        <nav>
          <Link to="/calendar">Agenda</Link>
          <Link to="/live-lecture">Aulas ao vivo</Link>
          <Link to="/trybe-talks">Trybe Talks</Link>
          <Link to="/solutions">Gabaritos</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
