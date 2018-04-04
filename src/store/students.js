import { observable, computed } from 'mobx'

const students = observable.map()

students.add = (s) => {
    if (students.has(s.id)) {
        throw new Error('student already exists')
    } else {
        students.set(s.id, s)
    }
}

students.update = (s) => {
    students.set(s.id, s)
}

students.byCourse = (c) => computed(() => {
    // eslint-disable-next-line
    return students.values().filter(s => {
        if (s.courses.includes(c)) {
            return s
        }
    })
}).get()

students.intercept((change) => {
    if (change.type === 'add') {
        change.newValue.courses = observable.array()
        change.newValue.enroll = (c) => {
            // TODO: disable enrolling a student twice
            students.get(change.name).courses.push(c)
        }
        change.newValue.unenroll = (c) => {
            // TODO: disable enrolling a student twice
            students.get(change.name).courses.remove(c)
        }
    }
    return change
})

export default students