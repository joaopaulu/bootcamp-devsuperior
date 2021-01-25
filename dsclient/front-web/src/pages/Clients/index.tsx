import React, { useEffect, useState } from 'react';
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
    <div className="client-container">
      <h1 className="client-title">Nossos Clientes</h1>
      <div className="client-products">
        {isLoading ? (
          <ClientCardLoader />
        ) : (
          clientsResponse?.content.map(client => <ClientCard client={client} />)
        )}
      </div>
    </div>
  );
};

export default Clients;
