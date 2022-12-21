import React from 'react';
import './Popup.css';

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="closeBtn" onClick={() => props.setTrigger(false)}>
          Fechar
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
