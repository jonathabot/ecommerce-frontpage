import React, { useState, useRef } from 'react';
import './MenuBar.css';
import { FaBars, FaCaretRight } from 'react-icons/fa';

function MenuBar() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  function onClick() {
    setIsActive(!isActive);
  }

  return (
    <div className="menuBar">
      <button onClick={onClick} className="menuBarIconTitleArrow">
        <FaBars className="menuBarIcon" />
        <span className="menuBarTitle">Ver toda Loja</span>
        <div className="menuBarCaret"> </div>
      </button>
      <ul
        className={`menuItems ${isActive ? 'active' : 'inactive'}`}
        ref={dropDownRef}
      >
        <li>
          Ar Condicionado <FaCaretRight />
        </li>
        <li>
          Ventilação <FaCaretRight />
        </li>
        <li>
          Eletrodomesticos <FaCaretRight />
        </li>
        <li>
          Eletroportáteis <FaCaretRight />
        </li>
        <li>
          Casa Inteligente <FaCaretRight />
        </li>
        <li>
          Comércio e Indústria <FaCaretRight />
        </li>
        <li>
          Máquinas e Ferramentas <FaCaretRight />
        </li>
        <li>
          Materiais de Instalação <FaCaretRight />
        </li>
        <li>
          Fluído Gás Refrigerante
          <FaCaretRight />
        </li>
        <li>
          Peças <FaCaretRight />
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;
