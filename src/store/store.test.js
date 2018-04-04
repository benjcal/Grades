import store2 from './store'

let activity = ({
    id:'sdfs11',
    name: 'Quiz'
})

let activity2 = ({
    id:1,
    name: 'Quizzzzz'
})

let course = {
    id: 1, name: 'math'
}
it('can add activity', () => {

    store2.activities.add(activity)
    

    expect(store2.activities.get(activity.id).name).toEqual('Quiz')

    

})

it('can add a course', () => {
    store2.courses.add(course)
})

it('can enroll student', () => {
    store2.courses.get(course.id).enroll(3)
    store2.courses.get(course.id).enroll(5)
})

it('can grade', () => {
    store2.activities.get(activity.id).grade(1,87)
    store2.activities.get(activity.id).grade(2,70)
    console.log(store2.activities.get(activity.id).grades.entries())
})
