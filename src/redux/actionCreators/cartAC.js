import {ADD_PIZZA_COUNT} from '../actions/cartActions'

export const addPizzaToCart = (pizzaObj) => ({
    type: ADD_PIZZA_COUNT,
    payload: pizzaObj
})