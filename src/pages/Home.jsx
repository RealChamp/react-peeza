import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actionCreators/filtersAC';
import { fetchPizzas } from '../redux/actionCreators/pizzasAC';
import { addPizzaToCart } from '../redux/actionCreators/cartAC';

function Home() {
  const dispatch = useDispatch();
  const { items, cartItems, isLoaded, category, sortBy } = useSelector(({ pizzas, filters, cart }) => ({
    items: pizzas.items,
    cartItems: cart.items,
    isLoaded: pizzas.isLoaded,
    category: filters.category,
    sortBy: filters.sortBy,
  }));

  const categoriesNames = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
  const sortItems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },
  ];

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category ));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesNames} 
        />
        <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock 
          onClickAddPizza={handleAddPizzaToCart}
          cartCount={cartItems[obj.id] && cartItems[obj.id].items.length} {...obj}
          key={obj.id} />)
          : Array(10)
              .fill('')
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
