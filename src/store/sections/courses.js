import { observable } from 'mobx'

const courses = observable.map()

courses.add = (c) => {
    if (courses.has(c.id)) {
        throw new Error('course already exists')
    } else {
        courses.set(c.id, c)
    }
}

courses.update = (c) => {
    courses.set(c.id, c)
}

export default courses