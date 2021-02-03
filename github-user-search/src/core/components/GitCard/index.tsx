import React from 'react';
import './style.scss';
import Button from '../Button';
import { UserGithub } from 'core/types/UserGithub';

type Props = {
  user: UserGithub;
};

const GitCard = ({ user }: Props) => {
  return (
    <div className="row github-card-container">
      <div className="col-2 github-foto-container">
        <img src={user.avatar_url} alt="Github Foto" />
        <Button text="Ver Perfil" />
      </div>
      <div className="col-9 github-info-container">
        <div className="flex-info">
          <div className="items-info">
            Repositórios públicos: {user.public_repos}
          </div>
          <div className="items-info">Seguidores: {user.followers}</div>
          <div className="items-info">Seguindo: {user.following}</div>
        </div>
        <div className="flex-info-details">
          <h6>Informações</h6>
          <div className="info-member">
            <div className="info-member-details">
              <span>Empresa:</span> {user.company}
            </div>
            <div className="info-member-details">
              <span>Website/Blog:</span> {user.blog}
            </div>
            <div className="info-member-details">
              <span>Localidade:</span> {user.location}
            </div>
            <div className="info-member-details">
              <span>Membro desde:</span> {user.created_at}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitCard;
