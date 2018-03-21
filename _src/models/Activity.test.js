import Activity from './Activity'
import Course from './Course'
import Student from './Student'
import Grade from './Grade'
import { getSnapshot } from 'mobx-state-tree'

let courseData = {
    id: '1',
    name: "Algebra",
    code: "MTH81",
    subject: "Math",
    grade: "8th",
    icon: "calc",
    color: 3
}

it('can create and activcity', () => {
    let course = Course.create(courseData)

    let activity = Activity.create({
        id: '1',
        name: 'Activity 1',
        course: course,
        points: 60,
        date: new Date()
    })

    expect(activity.points).toBe(60)
})

it('can edit activity', () => {
    let course = Course.create(courseData)

    let activity = Activity.create({
        id: '1',
        name: 'Activity 1',
        course: course,
        points: 60,
        date: new Date()
    })

    activity.edit({
        points: 80
    })

    expect(activity.points).toBe(80)
})

it('can grade and activity', () => {
    let student = Student.create({
        id: "110",
        firstName: "Abe",
        lastName: "Frankson",
        grade: "6",
        email: "abe@student.edu",
        phone: "123-456-7890"
    })

    let course = Course.create({
        id: '1',
        name: "Algebra",
        code: "MTH81",
        subject: "Math",
        grade: "8th",
        icon: "calc",
        color: 3
    })

    let activity = Activity.create({
        id: '1',
        name: 'Activity 1',
        course: course,
        points: 60,
        date: new Date()
    })

    activity.grade(student, 50)

    expect(activity.grades.get('110').grade).toBe(50)

    activity.grade(student, 58)

    expect(activity.grades.get('110').grade).toBe(58)
    
})

it('can display all grades', () => {
    let student = Student.create({
        id: "110",
        firstName: "Abe",
        lastName: "Frankson",
        grade: "6",
        email: "abe@student.edu",
        phone: "123-456-7890"
    })

    let course = Course.create({
        id: '1',
        name: "Algebra",
        code: "MTH81",
        subject: "Math",
        grade: "8th",
        icon: "calc",
        color: 3
    })

    let activity = Activity.create({
        id: '1',
        name: 'Activity 1',
        course: course,
        points: 60,
        date: new Date()
    })

    activity.grade(student, 50)

    expect(activity.allGrades()[0][1].grade).toBe(50)
    
})