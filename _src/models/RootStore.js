import { types, destroy } from 'mobx-state-tree'
import Student from './Student'
import Course from './Course'
import Activity from './Activity'

const RootStore = types.model({
    students: types.optional(types.map(Student), {}),
    courses: types.optional(types.map(Course), {}),
    activities: types.optional(types.map(Activity), {}),
}).actions(self => ({
    addStudent(student) {
        self.students.set(student.id, Student.create(student))
    },
    removeStudent(student) {
        destroy(student)
    },
    addCourse(course) {
        self.courses.set(course.id, Course.create(course))
    },
    removeCourse(course) {
        destroy(course)
    }
}))

export default RootStore