import React from 'react';
import { Client } from 'core/types/Client';
import './styles.scss';
import Moment from 'moment';
import CPF from 'cpf';

type Props = {
  client: Client;
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
    price,
  );
};

Moment.locale('pt-BR');

const ClientCard = ({ client }: Props) => (
  <div className="row card-base border-radius-10 client-card">
    <div className="col-2 image-info">
      <img
        src={client.picture}
        alt={client.name}
        className="client-card-image"
      />
    </div>
    <div className="col-8 client-info">
      <h6 className="client-name">{client.name}</h6>
      <h6 className="client-infos">CPF: {CPF.format(client.cpf)}</h6>
      <h6 className="client-infos">Salário: R${formatPrice(client.income)}</h6>
      <h6 className="client-infos">
        Data de Nascimento: {Moment(client.birthDate).format('DD/MM/YYYY')}
      </h6>
      <h6 className="client-infos">Filhos: {client.children}</h6>
    </div>
  </div>
);

export default ClientCard;
