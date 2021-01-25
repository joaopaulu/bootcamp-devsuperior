import React from 'react';
import { Client } from 'core/types/Client';
import './styles.scss';

type Props = {
  client: Client;
};

const ClientCard = ({ client }: Props) => (
  <div className="card-base border-radius-10 product-card">
    <img
      src={client.picture}
      alt={client.name}
      className="product-card-image"
    />
    <div className="product-info">
      <h6 className="product-name">{client.name}</h6>
      <h6 className="product-name">{client.cpf}</h6>
    </div>
  </div>
);

export default ClientCard;
