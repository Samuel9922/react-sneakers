import React from "react";
import {Link} from 'react-router-dom';
import AppContext from '../pages/context';

function Header(props){
    const {cartItems} = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    return (
        <header className="d-flex justify-between align-center p-40">
          <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt='biba'/>
          <div>
            <h3 className="text-uppercase">react sneakers</h3>
            <p className="opacity-5">Магазин лучший кроссовок</p>
          </div>
        </div>
        </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.png" alt="Корзина"/>
            <span>{totalPrice} руб.</span>
          </li>
            <Link to="/favorites">
              <li className="mr-10 cu-p">
                <img width={18} height={18} src="/img/izbr.png" alt="Закладки"/>
              </li>
            </Link>
          <li>
            <img width={18} height={18} src="/img/user.png" alt="Пользователь"/>
          </li>
        </ul>
      </header>
    );
}
export default Header;