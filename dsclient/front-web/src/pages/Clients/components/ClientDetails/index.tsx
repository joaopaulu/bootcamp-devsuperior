import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { Client } from 'core/types/Client';
import makeRequest from 'core/utils/request';
import ClientDescriptionLoader from '../Loaders/ClientDescriptionLoader';
import ClientInfoLoader from '../Loaders/ClientInfoLoader';
import './styles.scss';

type ParamsType = {
  clientId: string;
};

const ClientDetails = () => {
  const { clientId } = useParams<ParamsType>();
  const [client, setClient] = useState<Client>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    makeRequest({ url: `/clients/${clientId}` })
      .then(response => setClient(response.data))
      .finally(() => setIsLoading(false));
  }, [clientId]);

  return (
    <div className="client-details-container">
      <div className="card-base border-radius-20 client-details">
        <Link to="/clients" className="client-details-goback">
          <ArrowIcon className="icon-goback" />
          <h1 className="text-goback">voltar</h1>
        </Link>
        <div className="row">
          <div className="col-6 pr-5">
            {isLoading ? (
              <ClientInfoLoader />
            ) : (
              <>
                <div className="client-details-card text-center">
                  <img
                    className="client-details-image"
                    src={client?.picture}
                    alt={client?.name}
                  />
                </div>
              </>
            )}

            <h1 className="client-details-name">{client?.name}</h1>
          </div>
          <div className="col-6 client-details-card">
            {isLoading ? (
              <ClientDescriptionLoader />
            ) : (
              <>
                <h1 className="client-description-title">
                  Descrição do produto
                </h1>
                <p className="client-description-text">{client?.cpf}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
