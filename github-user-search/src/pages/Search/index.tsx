import React, { useState } from 'react';
import Button from 'core/components/Button';
import GitCard from 'core/components/GitCard';
import './styles.scss';

const Search = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [gitUser, setGitUser] = useState('');

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newUser) {
      setInputError('Digite o usuário do Github');
      return;
    } else {
      setGitUser(newUser);
      console.log(gitUser);
    }
    setInputError('');
  };

  const handleReset = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newUser) {
      setGitUser('');
      setNewUser('');
    }
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

            <div className="d-flex">
              <Button text="Encontrar" />
            </div>
          </form>
        </div>
      </div>
      {gitUser && <GitCard gitUsername={newUser} />}
    </>
  );
};

export default Search;
