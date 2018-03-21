import { createStore, combineReducers } from 'redux'

import courses from './reducers/courses'
import students from './reducers/students'

export default createStore(combineReducers(
    {
        courses,
        students
    }
))