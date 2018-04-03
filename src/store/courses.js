import { observable } from 'mobx'

const courses = observable.map()

courses.add = (c) => {
    if (courses.has(c.id)) {
        throw new Error('course already exists')
    } else {
        courses.set(c.id, c)
    }
}

courses.update = (c) => {
    courses.set(c.id, c)
}

courses.enroll = (c, s) => {
    courses.get(c).students.push(s)
}

courses.intercept((change) => {
    if (change.type === 'add') {
        change.newValue.students = observable.array()
        change.newValue.enroll = (s) => {
            // TODO: disable enrolling a student twice
            courses.get(change.name).students.push(s)
        }
        change.newValue.unenroll = (s) => {
            // TODO: disable enrolling a student twice
            courses.get(change.name).students.remove(s)
        }
    }
    return change
})



export default courses