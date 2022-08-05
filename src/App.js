import React, { useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  //В данном массиве хрониться карзина
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() =>{
    //Fetch берет или отправляет данные на сервер. res преобразует в формат json, тем самым возращает корректно данныне из массива
    //Запрос на бэкенд
  fetch('https://62ebdac255d2bd170e77d30c.mockapi.io/items')
    //Преобразование ответа в json
    .then((res) => {
      //Возвращает ответ
      return res.json();
    })
      //Вытаскивает из переменной json
    .then((json) => {
      //Передает в useState items
      setItems(json);
  });
  }, []);
  
  const onAddToCart = (obj) =>{
    //При каждом клике добавляются еще один предмет. Prev анонимная функция, которая вызывает конкретное состояние
    setCartItems(prev => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {/* Компоненты React JS */}
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart = {() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block" d-flex>
            <img src="\img\Search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
          </div>
        <div className="d-flex flex-wrap">
          {/* Карточка кроссовка */}
          
          {items.map((item) => 
          (<Card 
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={() => console.log('Добавили в закладки')}
            onPLus={(obj) => onAddToCart(obj)}
          />))
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
