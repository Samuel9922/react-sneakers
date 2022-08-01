import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
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
