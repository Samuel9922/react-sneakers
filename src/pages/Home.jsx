import Card from '../components/Card';

function Home({items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart}){
    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="\img\Search.svg" alt="Search"/>
            {/* Кнопка очистки */}
            {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
          </div>
        <div className="d-flex flex-wrap">
          {/* Рендеринг по массиву. Реализован поиск с вводом слова с маленкой буквы */}
          {items.filter(item => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
          <Card 
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPLus={(obj) => onAddToCart(obj)}
            {...item}
          />))
          }
          
        </div>
      </div>
    );
}

export default Home;