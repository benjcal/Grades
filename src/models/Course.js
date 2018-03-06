import { types, getParent, destroy } from 'mobx-state-tree'
import Student from './Student'
import Activity from './Activity'

const Course = types.model({
    id: types.identifier(types.string),
    name: types.string,
    code: "",
    subject: "",
    grade: types.string,
    icon: "",
    color: types.optional(types.number, 0),
    students: types.optional(types.map(Student), {}),
    activities: types.optional(types.map(Activity), {})
}).actions(self => ({
    edit(data) {
        Object.assign(self, data)
    },
    remove() {
        getParent(self, 2).removeCourse(self)
    },
    addStudent(student) {
        self.students.set(student.id, student)
    },
    removeStudent(student) {
        destroy(self.students.get(student.id))
    },
    addActivity(activity) {
        self.activities.set(activity.id, activity)
    },
    removeActivity(activity) {
        destroy(self.activities.get(activity.id))
    },
}))

export default Course