import React, { useState } from 'react';
import Button from 'core/components/Button';
import GitCard from 'core/components/GitCard';

import './styles.scss';

type FormState = {
  search: string;
};

const Search = () => {
  const [formData, setFormData] = useState<FormState>({
    search: '',
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData.search);
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
      {formData.search && <GitCard gitUsername={formData.search} />}
    </>
  );
};

export default Search;
