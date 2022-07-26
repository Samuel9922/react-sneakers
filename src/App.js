function App() {
  return (
    <div className="wrapper clear">
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
        {/* Карточка кроссовка */}
        <div className="d-flex">
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
