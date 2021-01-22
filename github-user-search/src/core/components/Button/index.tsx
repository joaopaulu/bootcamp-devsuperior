import React from 'react';
import './styles.scss';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => (
  <div className="d-flex">
    <button className="btn btn-primary btn-default">
      <span>{text}</span>
    </button>
  </div>
);

export default Button;
