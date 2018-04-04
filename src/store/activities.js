import { observable, computed } from 'mobx'

const activities = observable.map()

activities.add = (a) => {
    if (activities.has(a.id)) {
        throw new Error('activity already exists')
    } else {
        activities.set(a.id, a)
    }
}

activities.update = (a) => {
    activities.set(a.id, a)
}

activities.byCourse = (c) => computed(() => {
    // eslint-disable-next-line
    return activities.values().filter(a => {
        if (a.course_id === c) {
            return a
        }
    })
}).get()



activities.intercept(change => {
    if (change.type === 'add') {
        change.newValue.grades = observable.map({})

        change.newValue.grade = (sID, grade) => {
            activities.get(change.name).grades.set(sID, grade)
        }
        
        change.newValue.average = () => computed(()=> {
            let length = activities.get(change.name).grades.values().length 
            let total = activities.get(change.name).grades.values().reduce((a, g) => a + g)
            let total_points = activities.get(change.name).total_points

            return (total / length)
        }).get()
    }
    
    return change
})

export default activities