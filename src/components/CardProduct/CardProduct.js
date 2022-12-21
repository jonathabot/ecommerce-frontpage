import React from 'react';
import './CardProduct.css';
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart';

function CardProduct({
  nome,
  valor,
  valorComDesconto,
  marca,
  voltagem,
  seloA,
  freteGratis,
  imagemProduto,
  valorParcela
}) {
  const marcasImg = [
    {
      marcaNome: 'consul',
      marcaImg: 'https://i.imgur.com/KpQ4bNK.jpg'
    },
    {
      marcaNome: 'continental',
      marcaImg: 'https://i.imgur.com/p61KZ92.jpg'
    },
    {
      marcaNome: 'electrolux',
      marcaImg: 'https://i.imgur.com/naOBrMA.png'
    },
    {
      marcaNome: 'fogatti',
      marcaImg: 'https://i.imgur.com/5MZ4BM1.jpg'
    },
    {
      marcaNome: 'lg',
      marcaImg: 'https://i.imgur.com/sVUFqyX.jpg'
    },
    {
      marcaNome: 'venax',
      marcaImg: 'https://i.imgur.com/PMTIWF5.jpg'
    }
  ];

  function mostrarMarcaImg(marca) {
    const item = marcasImg.find(item => item.marcaNome === marca.toLowerCase());
    return item.marcaImg;
  }

  return (
    <div className="cardProduct">
      {freteGratis === 'true' ? (
        <img
          src="https://i.imgur.com/pSbEKDh.png"
          alt=""
          className="freteGratisImg"
        ></img>
      ) : null}

      <img src={imagemProduto} alt="" className="productImg"></img>

      <span className="nomeProduto">{nome}</span>

      <div className="selosImagens">
        {seloA === 'true' ? (
          <img src="https://i.imgur.com/JQwcfvm.jpg" alt=""></img>
        ) : null}

        {voltagem === '220' ? (
          <img src="https://i.imgur.com/al4pXPp.jpg" alt=""></img>
        ) : null}
      </div>

      <img src={mostrarMarcaImg(marca)} alt="" className="marcaImg"></img>

      <span className="valorDesconto">R${valorComDesconto}</span>
      <span className="aVistaText">à vista no PIX ou boleto</span>
      <span>ou R${valor} em 10x de</span>
      <span>R${valorParcela} sem juros</span>
      <ButtonAddToCart />
    </div>
  );
}

export default CardProduct;
