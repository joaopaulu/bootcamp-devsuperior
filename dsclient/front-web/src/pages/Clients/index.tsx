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
    <div className="client-container">
      <h1 className="client-title">Nossos Clientes</h1>
      <div className="client-products">
        {isLoading ? (
          <ClientCardLoader />
        ) : (
          clientsResponse?.content.map(client => (
            <Link to={`/clients/${client.id}`} key={client.id}>
              <ClientCard client={client} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Clients;
