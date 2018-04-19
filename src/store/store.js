import { observable } from 'mobx'
import students from './models/students'
import courses from './models/courses'
import activities from './models/activities'

// TODO: fix the multiple mobx instances issue
// https://github.com/mobxjs/mobx-state-tree

const store = observable({
    students,
    courses,
    activities
})

export default store
