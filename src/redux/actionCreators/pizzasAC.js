import {SET_PIZZAS} from '../actions/pizzasActions'

export const setPizzas = (items) => ({
    type: SET_PIZZAS,
    payload: items
})