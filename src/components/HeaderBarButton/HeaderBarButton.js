import React from 'react';
import './HeaderBarButton.css';

function HeaderBarButton({ imagem, nome }) {
  return (
    <div className="headerBarButton">
      <img src={imagem} alt={nome} height="21px" width="23px" />
      <span>{nome}</span>
    </div>
  );
}

export default HeaderBarButton;
