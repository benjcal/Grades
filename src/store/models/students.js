import { types } from 'mobx-state-tree'

// ------ Student Model ------
export const Student = types
    .model({
        id: types.identifier(types.number),
        first: types.string,
        last: types.string,
        email: "",
        phone: ""
    }).views(self => ({
        get name() {
            return `${self.first} ${self.last}`
        }
    }))

// ------ Students Model ------
export const Students = types
    .model({
        students: types.optional(types.map(Student), {})
    })
    .views(self => ({
        get(id) {
            return self.students.get(id)
        }
    }))
    .actions(self => ({
        add(s) {
            if (self.students.has(s.id)) 
                throw new Error('student already exists')
            else 
                self.students.set(s.id, s)
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