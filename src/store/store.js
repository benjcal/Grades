import { observable, computed } from 'mobx'

const store = observable({
    students: observable.map(),
    courses: observable.map(),
    activities: observable.map(),
    grades: observable.map(),
    enrollment: observable.map(),

    addStudent(student) {
        if (this.students.has(student.id)) {
            throw new Error('student already exists')
        } else {
            this.students.set(student.id, student)
        }
    },

    updateStudent(student) {
        this.students.set(student.id, student)
    },

    removeStudent(id) {
        this.students.delete(id)
    },

    addCourse(course) {
        if (this.courses.has(course.id)) {
            throw new Error('course already exists')
        } else {
            this.courses.set(course.id, course)
        }
    },

    updateCourse(course) {
        this.courses.set(course.id, course)
    },

    removeCourse(id) {
        this.courses.delete(id)
    },

    enrollStudent(courseId, studentId) {
        if (!this.enrollment.get(courseId)) {
            
            this.enrollment.set(courseId, observable.array([]))
            this.enrollment.get(courseId).push(studentId)
        } else {
            this.enrollment.get(courseId).push(studentId)
        }
    },
    unenrollStudent(courseId, studentId) {
        this.enrollment.get(courseId).remove(studentId)
    },
    enrolledStudents(courseId) {
        return computed(() => this.enrollment.get(courseId).map(n => this.students.get(n))).get()
     },

    addActivity(activity) {
        if (this.activities.has(activity.id)) {
            throw new Error('activity already exists')
        } else {
            this.activities.set(activity.id, activity)
            this.grades.set(activity.id, observable.map({}))
        }

    },
    updateActivity(activity) {
        this.activities.set(activity.id, activity)
    },
    removeActivity(id) {
        this.activities.delete(id)
    },
    gradeActivity(activityId, studentId, grade) {
        if (!this.grades.has(activityId)) {
            this.grades.set(activityId, observable.map({}))
            this.grades.get(activityId).set(studentId, grade)
        } else {
            this.grades.get(activityId).set(studentId, grade)
        }
    },
    activityGrade(activityId, studentId) {
        return computed(() => this.grades.get(activityId).get(studentId)).get()
        
    },
    listActivities(courseId) {
        // eslint-disable-next-line
        return computed(() => this.activities.values().filter((n) => {
            if (n.course_id === courseId) {
                return this.courses.get(n.course_id)
            }
        }
        )).get()
    },
    

})


export default store