import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { clientsResponse } from 'core/types/Client';
import makeRequest from 'core/utils/request';
import ClientCard from './components/ClientCard';
import ClientCardLoader from './components/Loaders/ClientCardLoader';
import './styles.scss';

const Clients = () => {
  const [clientsResponse, setclientsResponse] = useState<clientsResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params = {
      page: 0,
      linesPerPage: 12,
    };
    setIsLoading(true);
    makeRequest({ url: '/clients', params })
      .then(response => setclientsResponse(response.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Catálogo de produtos</h1>
      <div className="catalog-products">
        {isLoading ? (
          <ClientCardLoader />
        ) : (
          clientsResponse?.content.map(product => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ClientCard client={product} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Clients;
