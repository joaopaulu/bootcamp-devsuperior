import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

const PageHeader = () => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/" className="nav-logo-text">
          <h4>DS Client</h4>
        </Link>
        <ul className="main-menu">
          <li>
            <NavLink to="/" activeClassName="active" exact>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/clients" activeClassName="active">
              CLIENTES
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" activeClassName="active">
              ADMIN
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default PageHeader;
