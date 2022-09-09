import React from 'react';
import AppContext from '../pages/context';

const Info = ({ title, image, description}) => {
    const {setCartOpened} = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-centr justify-content:center flex-column flex">
            <img className="ml-50" width="230px" height="230px" src={image} alt="empty-cart" />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
              <img src="img/Arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
  )
}

export default Info;
