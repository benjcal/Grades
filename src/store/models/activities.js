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



// Legacy code
// const activities = observable.map()

// activities.add = (a) => {
//     if (activities.has(a.id)) {
//         throw new Error('activity already exists')
//     } else {
//         activities.set(a.id, a)
//     }
// }

// activities.update = (a) => {
//     activities.set(a.id, a)
// }

// activities.byCourse = (c) => computed(() => {
//     // eslint-disable-next-line
//     return activities.values().filter(a => {
//         if (a.course_id === c) {
//             return a
//         }
//     })
// }).get()

// activities.intercept(change => {
//     if (change.type === 'add') {
//         change.newValue.grades = observable.map({})

//         change.newValue.grade = (sID, grade) => {
//             activities.get(change.name).grades.set(sID, grade)
//         }
        
//         change.newValue.average = () => computed(()=> {
//             let length = activities.get(change.name).grades.values().length 
//             let total = activities.get(change.name).grades.values().reduce((a, g) => a + g)
//             let point = activities.get(change.name).points

//             return Math.round(((total / length) / point) * 100)
//         }).get()

//         change.newValue.studentGrade = (s) => computed(()=> {
//             return activities.get(change.name).grades.get(s)
//         }).get()
//     }
    
//     return change
// })

// export default activities