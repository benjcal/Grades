import { types } from 'mobx-state-tree'

// ------ Activity Model ------
const Activity = types
    .model({
        id: types.identifier(types.number),
        name: types.string,
        category: "",
        points: types.number,
        weight: types.number,
        course: types.number,
        grades: types.optional(types.map(types.number), {})
    })
    .views(self => ({
        studentGrade(studentId) {
            return self.grades.get(studentId)
        },
        get averagePercent() {
            let totalGrades = Array.from(self.grades.values()).length
            let totalPoints = Array.from(self.grades.values()).reduce((a, b) => a + b)
            let points = self.points

            return Math.round(((totalPoints / totalGrades) / points) * 100)
        }
    }))
    .actions(self => ({
        grade(studentId, grade) {
            self.grades.set(studentId, grade)
        }
    }))
    

// ------ Activities Model ------
const Activities = types
    .model({
        activities: types.optional(types.map(Activity), {})
    })
    .views(self => ({
        get(id) {
            return self.activities.get(id)
        },
        courseActivities(courseId) {
            return Array.from(self.activities.values())
                    .filter(a => a.parentCourse.id === courseId ? true : false)
            }
    }))
    .actions(self => ({
        add(a) {
            if (self.activities.has(a.id)) {
                throw new Error('activity already exsists')
            } else {
                self.activities.set(a.id, a)
            }
        },
        update(a) {
            self.activities.delete(a.id)
            self.activities.set(a.id, a)
        },
        delete(id) {
            self.activities.delete(id)
        }
    }))

export default Activities.create()
