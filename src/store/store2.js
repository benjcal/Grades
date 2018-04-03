import { observable, reaction, intercept } from 'mobx'
import students from './students'
import courses from './courses'
import activities from './activities'
import grades from './grades'

const store = observable({
    students,
    courses,
    activities,
    grades,
})

export default store
