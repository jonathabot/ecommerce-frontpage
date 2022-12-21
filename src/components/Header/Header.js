import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src="https://i.imgur.com/GStxSwm.jpg" alt="" />
      </div>
      <div className="headerSearchbar">
        <Searchbar />
      </div>
      <div className="headerLoginSignUp">
        <span id="welcomeText">Olá, bem vindo(a)!</span>
        <span>
          <a href="/">Entre</a> ou <a href="/">cadastre-se</a>
        </span>
      </div>
      <div className="headerCarrinho">
        <a href="/">Meu carrinho</a>
      </div>
    </div>
  );
}

export default Header;
