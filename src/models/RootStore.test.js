import RootStore from './RootStore'
import Student from './Student'
import Course from './Course'
import studentsData from 'data/students'
import coursesData from 'data/courses'

let store = RootStore.create()

it('can add users to store', () => {
    studentsData.map(n => {
        store.addStudent(Student.create(n))
    })
    expect(store.students.entries().length).toBe(50)
})

it('can delete student', () => {
    store.students.get('1').remove()
    expect(store.students.entries().length).toBe(49)
})

it('can add courses', () => {
    coursesData.map(n => {
        store.addCourse(Course.create(n))
    })

    expect(store.courses.entries().length).toBe(10)
})

it('can remove courses', () => {
    store.courses.get('1').remove()

    expect(store.courses.entries().length).toBe(9)
})
