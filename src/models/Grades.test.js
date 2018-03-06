import Grade from './Grade'
import Student from './Student'
import Activity from './Activity'
import Course from './Course'

let course = Course.create({
    id: '1',
    name: "Algebra",
    code: "MTH81",
    subject: "Math",
    grade: "8th",
    icon: "calc",
    color: 3
})

let student = Student.create({
    id: "110",
    firstName: "Abe",
    lastName: "Frankson",
    grade: "6",
    email: "abe@student.edu",
    phone: "123-456-7890"
})

it('can create grade', () => {
    let grade = Grade.create({
        student: student,
        grade: 58
    })

    expect(grade.grade).toBe(58)
})