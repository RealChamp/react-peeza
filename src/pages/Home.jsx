import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory } from '../redux/actionCreators/filtersAC';
import { fetchPizzas } from '../redux/actionCreators/pizzasAC';

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => ({
    items: pizzas.items,
    isLoaded: pizzas.isLoaded,
  }));

  const categories = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
  const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
  ];

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categories} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock {...obj} key={obj.id} />)
          : Array(10).fill(<PizzaLoadingBlock />)}
      </div>
    </div>
  );
}

export default Home;
