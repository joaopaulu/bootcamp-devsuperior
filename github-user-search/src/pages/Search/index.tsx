import React, { useEffect, useState } from 'react';
import Button from 'core/components/Button';
import GitCard from 'core/components/GitCard';
import makeRequest from 'core/utils/request';
import { UserGithub } from 'core/types/UserGithub';

import './styles.scss';

type FormState = {
  search: string;
};

const Search = () => {
  const [formData, setFormData] = useState<FormState>({
    search: '',
  });
  const [userResponse, setUserResponse] = useState<UserGithub>();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...formData,
    };

    makeRequest({ url: `/${payload}`, method: 'GET' }).then(response =>
      setUserResponse(response.data),
    );

    console.log(payload);
  };

  return (
    <>
      <div className="search-container">
        <div className="form-search">
          <form onSubmit={handleSubmit}>
            <label htmlFor="search">Encontre um perfil no Github</label>
            <input
              value={formData.search}
              type="text"
              name="search"
              id="search"
              onChange={handleOnChange}
              className="form-control"
              placeholder="Usuário Github"
            />
            <Button text="Encontrar" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
