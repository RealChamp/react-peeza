import { SET_PIZZAS, SET_LOADED } from '../actions/pizzasActions';
import axios from 'axios';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload
})

export function fetchPizzas(sortBy,category ) {
  return function (dispatch) {
    dispatch(setLoaded(false))
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
      dispatch(setPizzas(data));
    });
  };
}

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});
