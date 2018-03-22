import { createStore, combineReducers } from 'redux'

import courses from './reducers/courses'
import students from './reducers/students'
import enroll from './reducers/enroll'

export default createStore(combineReducers(
    {
        courses,
        students,
        enroll
    }
))