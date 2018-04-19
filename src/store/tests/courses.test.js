import courses from '../models/courses'
import data from '../sample_data/courses.json'
import students from '../sample_data/students.json'
import { Student } from '../models/students'

import store from '../store'

it('can add courses', () => {
    courses.add(data[0])
    courses.add(data[1])
    courses.add(data[2])
    courses.add(data[3])
    courses.add(data[4])

    expect(courses.get(data[0].id).name).toEqual(data[0].name)

    expect(() => {courses.add(data[4])}).toThrow('course already exists')
})

it('can update course', () => {
    data[0].name = 'sample'

    courses.update(data[0])

    expect(courses.get(data[0].id).name).toEqual('sample')
})

it('can delete course', () => {
    courses.delete(data[0].id)

    expect(courses.get(data[0].id)).toBeUndefined()
})

it('can enroll students', () => {
    store.students.add(students[0])
    store.students.add(students[1])
    store.courses.add(data[0])

    store.courses.get(data[0].id).enroll(students[0].id)
    store.courses.get(data[0].id).enroll(students[1].id)
    expect(() => { store.courses.get(data[0].id).enroll(students[1].id) }).toThrow('student already enrolled')
    
    expect(store.courses.get(data[0].id).students.toJSON()).toContain(students[0].id)

})

it('can unenroll students', () => {
    store.courses.get(data[0].id).unenroll(students[0].id)
    store.courses.get(data[0].id).unenroll(students[0].id)

    expect(store.courses.get(data[0].id).students.toJSON()).not.toContain(students[0].id)
})