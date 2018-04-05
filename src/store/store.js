import { observable } from 'mobx'
import students from './sections/students'
import courses from './sections/courses'
import activities from './sections/activities'

const store = observable({
    students,
    courses,
    activities
})

export default store
