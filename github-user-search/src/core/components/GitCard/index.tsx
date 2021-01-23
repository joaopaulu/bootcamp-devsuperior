import React from 'react';
import Gitfoto from 'core/assets/images/jp.png';
import './style.scss';
import Button from '../Button';

const GitCard = () => {
  return (
    <div className="row github-card-container">
      <div className="col-2 github-foto-container">
        <img src={Gitfoto} alt="Github Foto" />
        <Button text="Ver Perfil" />
      </div>
      <div className="col-9 github-info-container">
        <div className="flex-info">
          <div className="items-info">Repositórios públicos: {62}</div>
          <div className="items-info">Seguidores: {127}</div>
          <div className="items-info">Seguindo: {126}</div>
        </div>
        <div className="flex-info-details">
          <h6>Informações</h6>
          <div className="info-member">
            <div className="info-member-details">
              <span>Empresa:</span> {'@Ministério da Defesa'}
            </div>
            <div className="info-member-details">
              <span>Website/Blog:</span> {'www.jp.com.br'}
            </div>
            <div className="info-member-details">
              <span>Localidade:</span> {'Brasília'}
            </div>
            <div className="info-member-details">
              <span>Membro desde:</span> {'19/10/2020'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitCard;
