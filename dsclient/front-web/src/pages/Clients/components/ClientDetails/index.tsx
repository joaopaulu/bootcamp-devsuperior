import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { Client } from 'core/types/Client';
import makeRequest from 'core/utils/request';
import ClientDescriptionLoader from '../Loaders/ClientDescriptionLoader';
import ClientInfoLoader from '../Loaders/ClientInfoLoader';
import './styles.scss';

type ParamsType = {
  productId: string;
};

const ClientDetails = () => {
  const { productId } = useParams<ParamsType>();
  const [product, setClient] = useState<Client>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    makeRequest({ url: `/products/${productId}` })
      .then(response => setClient(response.data))
      .finally(() => setIsLoading(false));
  }, [productId]);

  return (
    <div className="product-details-container">
      <div className="card-base border-radius-20 product-details">
        <Link to="/products" className="product-details-goback">
          <ArrowIcon className="icon-goback" />
          <h1 className="text-goback">voltar</h1>
        </Link>
        <div className="row">
          <div className="col-6 pr-5">
            {isLoading ? (
              <ClientInfoLoader />
            ) : (
              <>
                <div className="product-details-card text-center">
                  <img
                    className="product-details-image"
                    src={product?.imgUrl}
                    alt={product?.name}
                  />
                </div>
              </>
            )}

            <h1 className="product-details-name">{product?.name}</h1>
          </div>
          <div className="col-6 product-details-card">
            {isLoading ? (
              <ClientDescriptionLoader />
            ) : (
              <>
                <h1 className="product-description-title">
                  Descrição do produto
                </h1>
                <p className="product-description-text">
                  {product?.description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
