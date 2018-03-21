import { types } from 'mobx-state-tree'
import Student from './Student'

const Grade = types.model({
    student: types.reference(Student),
    grade: types.number
}).actions(self => ({
    edit(data) {
        Object.assign(self, data)
    }
}))

export default Grade