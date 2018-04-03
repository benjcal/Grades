import { observable } from 'mobx'

const grades = observable.map()

grades.grade = (aID, sID, grade) => {
    grades.get(aID).set(sID, grade)
}

export default grades