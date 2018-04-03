import { observable } from 'mobx'

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

activities.intercept(change => {
    if (change.type === 'add') {
        change.newValue.grades = observable.map({})
        change.newValue.grade = (sID, grade) => {
            activities.get(change.name).grades.set(sID, grade)
        }
    }
    
    return change
})

export default activities