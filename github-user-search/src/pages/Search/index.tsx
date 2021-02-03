import React, { useState } from 'react';
import Button from 'core/components/Button';
import GitCard from 'core/components/GitCard';
import './styles.scss';

const Search = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newUser) {
      setInputError('Digite o usuário do Github');
      return;
    }
    setInputError('');
  };

  return (
    <>
      <div className="search-container">
        <div className="form-search">
          <form onSubmit={handleSubmit}>
            <label htmlFor="search">Encontre um perfil no Github</label>

            <input
              value={newUser}
              onChange={e => setNewUser(e.target.value)}
              type="text"
              name="search"
              id="search"
              className={`form-control ${inputError && 'input-erro'}`}
              placeholder="Usuário Github"
            />

            {inputError && (
              <div className="input-erro-container">
                <span className="input-erro-text">{inputError}</span>
              </div>
            )}

            <Button text="Encontrar" />
          </form>
        </div>
      </div>
      {newUser && <GitCard gitUsername={newUser} />}
    </>
  );
};

export default Search;
