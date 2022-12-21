import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div className="sideBar">
      <div className="categorias">
        <b>Categorias</b>

        <a href="/">Adega de Vinho</a>
        <a href="/">Churrasqueira</a>
        <a href="/">Coifa</a>
        <a href="/">Cooktop</a>
        <a href="/">Depurador de Ar</a>
        <a href="/">Fogão a Gás</a>
        <a href="/">Forno a Gás</a>
        <a href="/">Forno Elétrico</a>
        <a href="/">Frigobar</a>

        <a id="verMais" href="/">
          Ver mais
        </a>
      </div>
      <div className="marcas">
        <b>Marcas</b>
      </div>
      <div className="preco">
        <b>Preço</b>
        <form>
          <input
            type="checkbox"
            id="665a5573"
            name="665a5573"
            value="665a5573"
          ></input>
          <label htmlFor="665a5573">R$665,00 a 5573,00</label>
          <br />
          <input
            type="checkbox"
            id="5573a10480"
            name="5573a10480"
            value="5573a10480"
          ></input>
          <label htmlFor="5573a10480">R$5573,01 a 10480,00</label>
          <br />
          <input
            type="checkbox"
            id="10480a15388"
            name="10480a15388"
            value="10480a15388"
          ></input>
          <label htmlFor="10480a15388">R$10480,01 a 15388,00</label>
          <br />
          <input
            type="checkbox"
            id="15388a20295"
            name="15388a20295"
            value="15388a20295"
          ></input>
          <label htmlFor="15388a20295">R$15388,01 a 20295,00</label>
          <br />
          <input
            type="checkbox"
            id="20295a25203"
            name="20295a25203"
            value="20295a25203"
          ></input>
          <label htmlFor="20295a25203">R$20295,01 a 25203,00</label>
          <br />
        </form>
      </div>
    </div>
  );
}

export default SideBar;
