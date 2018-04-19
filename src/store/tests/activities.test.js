import activities from '../models/activities'
import data from '../sample_data/activities.json'

it('can import activities', () => {
    expect(activities).toBeDefined()
})

it('can add activity', () => {
    activities.add(data[0])
    activities.add(data[1])
    activities.add(data[2])
    activities.add(data[3])
    activities.add(data[4])

    expect(activities.get(data[4].id).toJSON().id).toEqual(data[4].id)
})

it('can update activity', () => {
    data[0].name = 'sample'

    activities.update(data[0])

    expect(activities.get(data[0].id).name).toEqual('sample')
})

it('can delete activity', () => {
    activities.delete(data[0].id)

    expect(activities.get(data[0].id)).toBeUndefined()
})

// data[1] => 
// {
//     "id": 2,
//     "type": "quiz",
//     "name": "quiz 2",
//     "points": 85,
//     "course_id": 3,
//     "weight": 29
// }
// TODO: To be moved to store test
// it('can list activities by course', () => {
//     console.log(activities.courseActivities(data[1].course))
//     expect(activities.courseActivities(data[1].course)[0].name).toEqual('quiz 2')
// })

it('can grade activity', () => {
    
    activities.get(data[1].id).grade(1, 100)

    expect(activities.get(data[1].id).studentGrade(1)).toEqual(100)
})

it('can return average', () => {
    expect(activities.get(data[1].id).averagePercent).toBeGreaterThan(0)
})