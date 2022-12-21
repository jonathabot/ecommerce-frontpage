import React from 'react';
import './BannerDestaque.css';
import Popup from '../Popup/Popup';
import { useState } from 'react';

function BannerDestaque() {
  const [buttonPopup, setButtonPopup] = useState(false);
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
          casa.
          <b>
            Confira as nossas dicas de compra de eletrodomésticos na Dufrio!
          </b>
        </span>
        <button onClick={() => setButtonPopup(true)}>Leia mais</button>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Tipos de eletrodoméstico</h3>
        <p>
          Quando o assunto é eletrodoméstico, o que não falta é a variedade de
          equipamentos para facilitar sua vida em diversos aspectos.
        </p>
        <p>
          São aparelhos que te ajudam no dia a dia a cozinhar, lavar louça,
          lavar roupas, secar, conservar, esquentar e refrigerar alimentos,
          entre muitas outras funções. Veja só:
        </p>

        <h4>Cozinha</h4>
        <p>
          A cozinha é, provavelmente, a peça da casa que concentra o maior
          número de eletrodomésticos.
        </p>
      </Popup>
    </div>
  );
}

export default BannerDestaque;
