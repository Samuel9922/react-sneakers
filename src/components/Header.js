function Header(){
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png"/>
          <div>
            <h3 className="text-uppercase">react sneakers</h3>
            <p className="opacity-5">Магазин лучший кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} height={18} src="/img/cart.png" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-10"><img width={18} height={18} src="/img/izbr.png" />
          </li>
          <li><img width={18} height={18} src="/img/user.png" />
          </li>
        </ul>
      </header>
    );
}
export default Header;