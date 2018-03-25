import { createStore, combineReducers } from 'redux'

import courses from './reducers/courses'
import students from './reducers/students'
import courseStudents from './reducers/courseStudents'

export default createStore(combineReducers(
    {
        courses,
        students,
        courseStudents
    }
))