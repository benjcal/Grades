import Course from './Course'
import Student from './Student'
import { getSnapshot } from 'mobx-state-tree'

let data = {
    id: '1',
    name: "Algebra",
    code: "MTH81",
    subject: "Math",
    grade: "8th",
    icon: "calc",
    color: 3
}

let studentData = {
    id: "110",
    firstName: "Abe",
    lastName: "Frankson",
    grade: "6",
    email: "abe@student.edu",
    phone: "123-456-7890"
}


it('can add courses', () => {
    let course = Course.create(data)

    expect(course.name).toBe('Algebra')
})

it('can edit course', () => {
    let course = Course.create(data)
    course.edit({
        name: 'Sample'
    })
    expect(course.name).toBe('Sample')
})

it('can enroll student', () => {
    let course = Course.create(data)
    let student = Student.create(studentData)

    course.addStudent(student)

    expect(course.students.get('110').firstName).toBe('Abe')
})

it('can remove student', () => {
    let course = Course.create(data)
    let student = Student.create(studentData)

    course.addStudent(student)

    expect(course.students.get('110').firstName).toBe('Abe')
    course.students.get('110').remove()

    expect(course.students.entries().length).toBe(0)
})

it('can add activity', () => {
    throw('TODO')
})