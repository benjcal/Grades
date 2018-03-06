import { types, getParent } from 'mobx-state-tree'

const Student = types.model({
    id: types.identifier(types.string),
    firstName: types.string,
    lastName: types.string,
    grade: types.string,
    email: "",
    phone: ""
}).actions(self => ({
    edit(data) {
        Object.assign(self, data)
    },
    remove() {
        getParent(self, 2).removeStudent(self)
    }
}))

export default Student