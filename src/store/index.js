import { createStore, combineReducers } from 'redux'
import { ui } from './reducers'

let store = createStore(combineReducers({
    ui
}))

export default store