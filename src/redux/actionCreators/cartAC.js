import {ADD_PIZZA_COUNT, CLEAR_CART, REMOVE_CART_ITEM, ADD_ITEM_BUTTON, SUBTRACT_ITEM_BUTTON} from '../actions/cartActions'

export const addPizzaToCart = (pizzaObj) => ({
    type: ADD_PIZZA_COUNT,
    payload: pizzaObj
})

export const clearCart = () => ({
    type: CLEAR_CART,
})

export const removeCartItem = (id) => ({
    type: REMOVE_CART_ITEM,
    payload: id
})

export const addItemButton = (id) => ({
    type: ADD_ITEM_BUTTON,
    payload: id
})

export const subtractItemButton = (id) => ({
    type: SUBTRACT_ITEM_BUTTON,
    payload: id
})