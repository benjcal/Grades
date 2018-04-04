import store from './store'
import { toJS } from 'mobx'

let student1 = {
    id: 'student1',
    name: 'Ben'
}

let student2 = {
    id: 'student2',
    name: 'Grace'
}

let course1 = {
    id: 'course1',
    name: 'Math 101'
}

let course2 = {
    id: 'course2',
    name: 'Science 312'
}

let activity1 = {
    id: 'activity1',
    name: 'Quiz 1',
    totalPoints: 40
}

let activity2 = {
    id: 'activity2',
    name: 'Exam 2',
    totalPoints: 120
}

it('can add student', () => {
    store.addStudent(student1)
    store.addStudent(student2)

    expect(store.students.get(student1.id)).toEqual(student1)
    expect(store.students.get(student2.id)).toEqual(student2)
})

it('can remove student', () => {
    store.removeStudent(student1.id)

    expect(store.students.get(student1.id)).toEqual(undefined)
    expect(store.students.get(student2.id)).toEqual(student2)
    
})


it('can update student', () => {
    student2.name = 'Albert'

    store.updateStudent(student2)

    expect(store.students.get(student2.id).name).toEqual('Albert')
})



it('can add course', () => {
    store.addCourse(course1)
    store.addCourse(course2)

    expect(store.courses.get(course1.id)).toEqual(course1)
    expect(store.courses.get(course2.id)).toEqual(course2)
})

it('can remove course', () => {
    store.removeCourse(course1.id)

    expect(store.courses.get(course1.id)).toEqual(undefined)
    expect(store.courses.get(course2.id)).toEqual(course2)
})

it('can update course', () => {
    course2.name = 'Rel 442'
    store.updateCourse(course2)

    expect(store.courses.get(course2.id).name).toEqual('Rel 442')

})

it('can enroll student', () => {
    store.enrollStudent(course2.id, student1.id)
    store.enrollStudent(course2.id, student2.id)

    expect(store.enrollment.get(course2.id)).toContain(student1.id)
    expect(store.enrollment.get(course2.id)).toContain(student2.id)
})

it('can unenroll students', () => {
    store.unenrollStudent(course2.id, student1.id)
    expect(store.enrollment.get(course2.id)).not.toContain(student1.id)
})

it('can add activity', () => {
    store.addActivity(activity1)
    store.addActivity(activity2)

    expect(store.activities.get(activity1.id)).toEqual(activity1)
    expect(store.activities.get(activity2.id)).toEqual(activity2)
})

it('can update and activity', () => {
    activity1.totalPoints = 45
    store.updateActivity(activity1)

    expect(store.activities.get(activity1.id).totalPoints).toEqual(45)
})

it('can remove and activity', () => {
    store.removeActivity(activity1.id)

    expect(store.activities.get(activity1.id)).toEqual(undefined)
})

it('can grade an activity', () => {
    store.gradeActivity(activity1.id, student2.id, 17)
    store.gradeActivity(activity2.id, student2.id, 71)
    store.gradeActivity(activity1.id, student1.id, 40)
    store.gradeActivity(activity2.id, student1.id, 83)

    expect(store.grades.get(activity1.id).get(student2.id)).toEqual(17)
    expect(store.grades.get(activity2.id).get(student2.id)).toEqual(71)
})
