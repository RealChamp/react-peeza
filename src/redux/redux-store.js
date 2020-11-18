import {applyMiddleware, createStore, compose} from 'redux'
import reducers from './reducers/'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_COMPOSE__ || compose

const store = createStore(
    reducers,
    composeEnhancer(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    )

export default store