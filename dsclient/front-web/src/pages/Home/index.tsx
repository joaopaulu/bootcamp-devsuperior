import React from 'react';
import ButtonIcon from 'core/components/Buttonicon';
import hero from 'core/assets/images/hero.png';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => {
  return (
    <div className="row home-content">
      <div className="col-6 home-text">
        <h1 className="text-title">
          Develop great <br /> business leaders
        </h1>
        <p className="text-subtitle">
          Vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat
          nisl vel pretium lectus quam id leo in vitae. Dictum sit amet justo
          donec enim diam vulputate.
        </p>
        <Link to="/clients">
          <ButtonIcon text="inicie agora a sua busca" />
        </Link>
      </div>
      <div className="col-6 main-image">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
