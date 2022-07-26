import Card from './components/Card'
function App() {
  return (
    <div className="wrapper clear">
      <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина 
          <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
          </h2>

          <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage:'url(/imgsneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
            <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage:'url(/imgsneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          </div>

          <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className="d-flex">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="/img/Arrow.svg" alt="Arrow" /></button>
          </div>
          </div>
      </div>


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
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block" d-flex>
            <img src="\img\Search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
          </div>
        <div className="d-flex">
          {/* Карточка кроссовка */}
          <Card />
          <div className="card">
            <div className="favorite">
              <img src="\img\heart.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/imgsneakers/1.jpg" alt="Sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="\img\button_1.svg" alt="" />
              </button>
            </div>
          </div>
        <div className="card">
        <img src="\img\heart.svg" alt="Unliked" />
          <img width={133} height={112} src="/imgsneakers/2.jpg" alt="Sneakers" />
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="\img\button_1.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/imgsneakers/3.jpg" alt="Sneakers" />
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="\img\button_1.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/imgsneakers/4.jpg" alt="Sneakers" />
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="\img\button_1.svg" alt="" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
