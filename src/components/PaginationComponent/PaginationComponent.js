import React from 'react';
import './PaginationComponent.css';
import products from '../../products.json';

function PaginationComponent({
  pages,
  currentPage,
  setCurrentPage,
  startIndex,
  endIndex,
  itensPerPage
}) {
  return (
    <div className="paginationComponent">
      <div className="pagitinationCurrentProducts">
        <span>
          Produtos: {startIndex + 1} - {endIndex} de {products.items.length}
        </span>
      </div>
      <div className="paginationButtons">
        <button
          style={currentPage === 0 ? { opacity: '0.5' } : null}
          className="paginationButtonWithName firstPageButton"
          onClick={currentPage === 0 ? {} : e => setCurrentPage(0)}
        >
          Primeira
        </button>
        <button
          style={currentPage === 0 ? { opacity: '0.5' } : null}
          className="paginationButtonWithName"
          onClick={currentPage === 0 ? {} : e => setCurrentPage(0)}
        >
          Anterior
        </button>
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              style={
                index === currentPage
                  ? {
                      backgroundColor: '#ff4f01',
                      border: 'none',
                      color: 'white'
                    }
                  : null
              }
              className="paginationButton"
              value={index}
              onClick={e => setCurrentPage(Number(e.target.value))}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          style={currentPage + 1 === pages ? { opacity: '0.5' } : null}
          className="paginationButtonWithName"
          onClick={
            currentPage + 1 === pages
              ? {}
              : e => setCurrentPage(currentPage + 1)
          }
        >
          Proxímo
        </button>
        <button
          style={currentPage + 1 === pages ? { opacity: '0.5' } : null}
          className="paginationButtonWithName lastPageButton"
          onClick={
            currentPage + 1 === pages
              ? {}
              : e => setCurrentPage(products.items.length / itensPerPage - 1)
          }
        >
          Ultima
        </button>
      </div>
    </div>
  );
}

export default PaginationComponent;
