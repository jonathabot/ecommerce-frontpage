import React, { useEffect } from 'react';
import './ListProducts.css';
import products from '../../products.json';
import CardProduct from '../CardProduct/CardProduct';
import OrderButtons from '../OrderButtons/OrderButtons';
import PaginationComponent from '../PaginationComponent/PaginationComponent';
import { useState } from 'react';

function ListProducts() {
  const [itensPerPage, setItensPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(products.items.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = products.items.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  return (
    <div className="listProducts">
      <OrderButtons
        itensPerPage={itensPerPage}
        setItensPerPage={setItensPerPage}
      />

      <div className="products">
        {currentItens.map(e => {
          return (
            <div className="eachProduct" key={e.index}>
              <CardProduct
                nome={e.nome}
                valor={e.valor}
                valorComDesconto={e.valorComDesconto}
                marca={e.marca}
                voltagem={e.voltagem}
                seloA={e.seloA}
                freteGratis={e.freteGratis}
                imagemProduto={e.imagemProduto}
                valorParcela={e.valorParcela}
              />
            </div>
          );
        })}
      </div>

      <PaginationComponent
        currentPage={currentPage}
        pages={pages}
        setCurrentPage={setCurrentPage}
        startIndex={startIndex}
        endIndex={endIndex}
        itensPerPage={itensPerPage}
      />
    </div>
  );
}

export default ListProducts;
