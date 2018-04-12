import { observable, computed } from 'mobx'
import { types } from 'mobx-state-tree'
import { Course } from './courses'

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

        change.newValue.name = computed(()=> {
            return students.get(change.name).first + ' ' + students.get(change.name).last
        })
    }
    return change
})

// export default students


export const Student = types
    .model({
        id: types.number,
        first: types.string,
        last: types.string,
        email: "",
        phone: "",
        courses: types.optional(types.array(types.reference(Course)), [])
    }).views(self => ({
        get name() {
            return `${self.first} ${self.last}`
        }
    }))
    .actions(self => ({
        enroll(c) {
            self.courses.push(c)
        },
        unenroll(c) {
            self.courses.remove(c)
        }
    }))







export const Students = types
    .model({
        students: types.optional(types.map(Student), {})
    })
    .views(self => ({
        get(id) {
            return self.students.get(id)
        },
        byCourse(c) {
            console.log(self.students.forEach())
            // eslint-disable-next-line
            // return self.students.values().filter(s => {
            //     if (s.courses.includes(c)) {
            //         return s
            //     }
            // })
        }
    }))
    .actions(self => ({
        add(s) {
            if (self.students.has(s.id)) {
                throw new Error('student already exists')
            } else {
                self.students.set(s.id, s)
            }
        },
        update(s) {
            self.students.delete(s.id)
            self.students.set(s.id, Student.create(s))
        },
        delete(id) {
            self.students.delete(id)
        }
    }))

    export default Students.create()