import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  //В данном массиве хрониться карзина
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() =>{
    //get используется при получении
    axios.get('https://62ebdac255d2bd170e77d30c.mockapi.io/items').then(res => {
      setItems(res.data);
    });
    //Запрос корзины и сохранение резкльтата в useState "cartItems"
    axios.get('https://62ebdac255d2bd170e77d30c.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
    axios.get('https://62ebdac255d2bd170e77d30c.mockapi.io/favorites').then(res => {
      setFavorites(res.data);
    });
  }, []);
  
  const onAddToCart = (obj) =>{
    //post используется при создании. Сохранение результата на сервер
    axios.post('https://62ebdac255d2bd170e77d30c.mockapi.io/cart', obj);
    //При каждом клике добавляются еще один предмет. Prev анонимная функция, которая вызывает конкретное состояние. Пользователю сразу выводим результат
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) =>{
    axios.delete(`https://62ebdac255d2bd170e77d30c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) =>{
    try {
      //Если в Favorite такой же id при клике
    if (favorites.find((favobj) => favobj.id === obj.id)) {
      //То отправляется запрос на удаление в backend
      axios.delete(`https://62ebdac255d2bd170e77d30c.mockapi.io/favorites/${obj.id}`);
    } else {
      //Дождаться ответа от backend
      const {data} = await axios.post('https://62ebdac255d2bd170e77d30c.mockapi.io/favorites', obj);
      //Сохранение объекта в state
    setFavorites((prev) => [...prev, data]);
    }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
    
  };

  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {/* Компоненты React JS */}
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> : null}
      <Header onClickCart = {() => setCartOpened(true)} />
      
      <Routes>
      <Route exact path='/'
        element={
        <Home 
        items={items} 
        searchValue={searchValue} 
        setSearchValue={searchValue} 
        onChangeSearchInput={onChangeSearchInput}
        onAddToFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}
        />}/> 
      </Routes>

      <Routes>
      <Route exact path='/favorites'
        element={
        <Favorites 
        items={favorites}
        onAddToFavorite={onAddToFavorite}
        />
        }/> 
      </Routes>
      
    </div>
  );
}

export default App;
