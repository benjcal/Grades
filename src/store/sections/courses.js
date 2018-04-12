import { types } from 'mobx-state-tree'

export const Course = types.model({
    id: types.identifier(types.number),
    name: types.string,
    grade: types.number
})

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
                self.courses.set(c.id, Course.create(c))
            }
            
        },
        update(c) {
            self.courses.delete(c.id)
            self.courses.set(c.id, Course.create(c))
        },
        delete(id) {
            self.courses.delete(id)
        }
    }))

export default Courses.create()