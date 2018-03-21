import Student from './Student'
import { getSnapshot } from 'mobx-state-tree'

let data = {
    id: "110",
    firstName: "Abe",
    lastName: "Frankson",
    grade: "6",
    email: "abe@student.edu",
    phone: "123-456-7890"
}

let data2 = {
    id: "111",
    firstName: "Ally",
    lastName: "Smith",
    grade: "5",
    email: "ally@ddtls.org",
    phone: "987-654-3210"
}

let student = Student.create(data)
let student2 = Student.create(data2)


it('can create a student', () => {
    expect(student).toEqual(data)
    expect(student2).toEqual(data2)
})

it('can edit a student', () => {
    student.edit({
        firstName: 'lol'
    })
    expect(student.firstName).toBe('lol')
})

