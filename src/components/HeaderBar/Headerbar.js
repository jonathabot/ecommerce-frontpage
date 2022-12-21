import React from 'react';
import './Headerbar.css';
import HeaderBarButton from '../HeaderBarButton/HeaderBarButton';
import MenuBar from '../MenuBar/MenuBar';

function Headerbar() {
  const headerBarButton = [
    {
      ButtonName: 'Ar Condicionado',
      ButtomIcon: 'https://i.imgur.com/l0P6k3y.jpg'
    },
    {
      ButtonName: 'Eletrodomesticos',
      ButtomIcon: 'https://i.imgur.com/f9jQabQ.jpg'
    },
    {
      ButtonName: 'Eletroportáteis',
      ButtomIcon: 'https://i.imgur.com/xDyPUow.jpg'
    },
    {
      ButtonName: 'Comércio e Indústria',
      ButtomIcon: 'https://i.imgur.com/McXGFcz.jpg'
    },
    {
      ButtonName: 'Peças',
      ButtomIcon: 'https://i.imgur.com/NfZgP9R.jpg'
    },
    {
      ButtonName: 'Maquinas e Ferramentas',
      ButtomIcon: 'https://i.imgur.com/hLGcUT7.jpg'
    },
    {
      ButtonName: 'Natal',
      ButtomIcon: 'https://i.imgur.com/uksAoZV.jpg'
    }
  ];

  return (
    <div className="headerBar">
      <div className="menuLoja">
        <MenuBar />
      </div>
      <div className="headerBarButtons">
        {headerBarButton.map(e => {
          return (
            <div className="eachHeaderBarButton" key={e.ButtonName}>
              <div className="blueStripe"></div>
              <HeaderBarButton nome={e.ButtonName} imagem={e.ButtomIcon} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Headerbar;
