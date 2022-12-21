import React from 'react';
import './OrderButtons.css';

function OrderButtons({ itensPerPage, setItensPerPage }) {
  return (
    <div className="orderButtons">
      <div className="viewQuantityButton">
        <label>Itens por pagina:</label>
        <select
          value={itensPerPage}
          onChange={e => setItensPerPage(Number(e.target.value))}
        >
          <option value={12} defaultValue>
            12
          </option>
          <option value={24}>24</option>
          <option value={36}>36</option>
        </select>
      </div>
      <div className="viewOrderButton">
        <label>Ordenar por:</label>
        <select>
          <option value="valuePop" defaultValue>
            Popularidade
          </option>
          <option value="valueMenorPreco">Menor Preço</option>
          <option value="valueMaiorPreco">Maior Preço</option>
        </select>
      </div>
      <div className="viewFilterButton">
        <button className="filterButton">Filter</button>
      </div>
    </div>
  );
}

export default OrderButtons;
