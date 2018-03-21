import { types } from 'mobx-state-tree'
import Grade from './Grade'

const Activity = types.model({
    id: types.identifier(types.string),
    name: types.string,
    points: types.optional(types.number, 0),
    date: types.Date,
    grades: types.optional(types.map(Grade), {})
})
.views(self => ({
    allGrades() {
        return self.grades.entries()
    }
}))
.actions(self => ({
    edit(data) {
        Object.assign(self, data)
    },
    grade(student, grade) {
        self.grades.set(student.id, Grade.create({
            student,
            grade
        }))
    }
}))

export default Activity