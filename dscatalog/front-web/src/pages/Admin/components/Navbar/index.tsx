import React from 'react';
import './style.scss';

const Navbar = () => (
  <nav className="admin-nav-container">
    <ul>
      <li>
        <a href="link" className="active">
          Produtos
        </a>
      </li>
      <li>
        <a href="link">Categorias</a>
      </li>
      <li>
        <a href="link">Usuários</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
