import { createStore, combineReducers } from 'redux'
import { ui, students, courses } from './reducers'

let store = createStore(combineReducers({
    ui,
    students,
    courses,
    
}))

export default store