import React from 'react';
import './ButtonAddToCart.css';

function ButtonAddToCart() {
  return (
    <div className="buttonAddToCart">
      <button id="addToCartButton">
        <img src="/cart-botao.svg"></img>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ButtonAddToCart;
