import React from 'react';
import './BannerDestaque.css';

function BannerDestaque() {
  return (
    <div className="bannerDestaque">
      <img
        src="https://i.imgur.com/VRBP96l.png"
        alt="Imagem de eletrodomésticos para o Banner de Destaque"
      ></img>
      <div className="bannerTexts">
        <h1>Eletrodomésticos</h1>
        <span className="destaqueText">
          Você consegue imaginar sua rotina sem os eletrodomésticos? Difícil,
          né? Eles são equipamentos essenciais para realizar as tarefas
          domésticas com praticidade e eficiência, além de oferecer conforto
          para o seu lar. Aqui na Dufrio você encontra diversas opções de
          eletrodomésticos para a cozinha, a lavanderia e outros ambientes da
          casa.{' '}
          <b>
            Confira as nossas dicas de compra de eletrodomésticos na Dufrio!
          </b>
        </span>
        <a href="/">Leia mais</a>
      </div>
    </div>
  );
}

export default BannerDestaque;
