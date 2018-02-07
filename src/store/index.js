import { createStore, combineReducers } from 'redux'
import { ui } from './reducers'

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
        return state + 1
        case 'DECREMENT':
        return state - 1
        default:
        return state
    }
}


let store = createStore(combineReducers({
    counter,
    ui
}))

export default store