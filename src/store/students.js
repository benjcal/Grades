import { observable } from 'mobx'

const students = observable.map()

students.add = (s) => {
    if (students.has(student.id)) {
        throw new Error('student already exists')
    } else {
        students.set(s.id, s)
    }
}

students.update = (s) => {
    students.set(s.id, s)
}
