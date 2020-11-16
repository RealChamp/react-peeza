import { SET_PIZZAS } from '../actions/pizzasActions';
import axios from 'axios';

export function fetchPizzas() {
  return function (dispatch) {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  };
}

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});
