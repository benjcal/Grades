import { types } from 'mobx-state-tree'

// ------ Course ------
export const Course = types
    .model({
        id: types.identifier(types.number),
        name: types.string,
        grade: types.number,
        students: types.optional(types.array(types.number), [])
    })
    .actions(self => ({
        enroll(studentId) {
            if (!self.students.includes(studentId)) {
                self.students.push(studentId)
            } else if (self.students.includes(studentId)) {
                throw new Error('student already enrolled')
            }
        },
        unenroll(studentId) {
            self.students.remove(studentId)
        }
    }))

// ------ Courses ------
const Courses = types
    .model({
        courses: types.optional(types.map(Course), {})
    })
    .views(self => ({
        get(id) {
            return self.courses.get(id)
        },
    }))
    .actions(self => ({
        add(c) {
            if (self.courses.has(c.id)) {
                throw new Error('course already exists')
            } else {
                self.courses.set(c.id, c)
            }
            
        },
        update(c) {
            self.courses.delete(c.id)
            self.courses.set(c.id, Course.create(c))
        },
        delete(id) {
            self.courses.delete(id)
        },
    }))

export default Courses.create()