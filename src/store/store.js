import { observable } from 'mobx'
import students from './models/students'
import courses from './models/courses'
import activities from './models/activities'

const store = observable({
    students,
    courses,
    activities
})

export default store
