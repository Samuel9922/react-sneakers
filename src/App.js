import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './pages/context';

// export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  //В данном массиве хрониться карзина
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
      async function fetchData() {
      //get используется при получении
      const itemsRespons = await axios.get('https://62ebdac255d2bd170e77d30c.mockapi.io/items');
    //Запрос корзины и сохранение резкльтата в useState "cartItems"
      const cartRespons = await axios.get('https://62ebdac255d2bd170e77d30c.mockapi.io/cart');
      const favoritesRespons = await axios.get('https://62ebdac255d2bd170e77d30c.mockapi.io/favorites');

      setIsLoading(false);
      setCartItems(cartRespons.data);
      setFavorites(favoritesRespons.data);
      setItems(itemsRespons.data);
    }

    fetchData();
  }, []);
  
  const onAddToCart = (obj) =>{
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://62ebdac255d2bd170e77d30c.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      //post используется при создании. Сохранение результата на сервер
      axios.post('https://62ebdac255d2bd170e77d30c.mockapi.io/cart', obj);
      //При каждом клике добавляются еще один предмет. Prev анонимная функция, которая вызывает конкретное состояние. Пользователю сразу выводим результат
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) =>{
    axios.delete(`https://62ebdac255d2bd170e77d30c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) =>{
    try {
      //Если в Favorite такой же id при клике
    if (favorites.find((favobj) => Number(favobj.id) === Number(obj.id))) {
      //То отправляется запрос на удаление в backend
      axios.delete(`https://62ebdac255d2bd170e77d30c.mockapi.io/favorites/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite}}>
      <div className="wrapper clear">
      {/* Компоненты React JS */}
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> : null}
      <Header onClickCart = {() => setCartOpened(true)} />
      
      <Routes>
      <Route exact path='/'
        element={
        <Home 
        items={items} 
        cartItems={cartItems}
        searchValue={searchValue} 
        setSearchValue={searchValue} 
        onChangeSearchInput={onChangeSearchInput}
        onAddToFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}
        isLoading={isLoading}
        />}/> 
      </Routes>

      <Routes>
      <Route exact path='/favorites'
        element={
        <Favorites />
        }/> 
      </Routes>
      
    </div>
    </AppContext.Provider>
  );
}

export default App;
