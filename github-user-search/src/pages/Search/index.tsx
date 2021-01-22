import Button from 'core/components/Button';
import React from 'react';

import './styles.scss';

const Search = () => {
  return (
    <div className="search-container">
      <div className="form-search">
        <label htmlFor="search">Encontre um perfil no Github</label>
        <input
          type="text"
          name="search"
          id="search"
          className="form-control"
          placeholder="Usuário Github"
        />
        <Button text="Encontrar" />
      </div>
    </div>
  );
};

export default Search;
