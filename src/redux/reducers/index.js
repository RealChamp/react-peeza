import {combineReducers} from 'redux'
import filtersReducer from './filters'
import pizzasReducer from './pizzas'

const reducers = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer
})

export default reducers