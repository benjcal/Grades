import { observable } from 'mobx'
import _pull from 'lodash.pull'
import _set from 'lodash.set'
import _assign from 'lodash.assign'

const store = observable({
    students: observable.map({}),
    courses: {},
    activities: {},
    grades: {},

    addStudent(student) {
        if (this.students[student.id]) {
            throw new Error('student already exists')
        } else {
            // this.students[student.id] = observable.map(student)
            this.students.set(student.id, student)
        }
    },

    updateStudent(student) {
        this.students.set(student.id, student)
        // this.students[student.id] = observable.map(student)
    },

    removeStudent(id) {
        delete this.students[id]
    },

    addCourse(course) {
        if (this.courses[course.id]) {
            throw new Error('course already exists')
        } else {
            this.courses[course.id] = course
        }
    },

    updateCourse(course) {
        this.courses[course.id] = course
    },

    removeCourse(id) {
        delete this.courses[id]
    },

    enrollStudent(courseId, studentId) {
        if (!this.courses[courseId].students) {
            this.courses[courseId].students = []
            this.courses[courseId].students.push(studentId)
        } else {
            this.courses[courseId].students.push(studentId)
        }
    },

    unenrollStudent(courseId, studentId) {
        _pull(this.courses[courseId].students, studentId)
    },

    addActivity(activity) {
        if (this.activities[activity.id]) {
            throw new Error('activity already exists')
        } else {
            this.activities[activity.id] = activity
        }

    },

    updateActivity(activity) {
        this.activities[activity.id] = activity
    },

    removeActivity(id) {
        delete this.activities[id]
    },

    gradeActivity(activityId, studentId, grade) {
        if (!this.grades[activityId]) {
            this.grades[activityId] = {}
            _assign(this.grades[activityId], _set({}, studentId, grade))
        } else {
            _assign(this.grades[activityId], _set({}, studentId, grade))
        }
    }

})


export default store