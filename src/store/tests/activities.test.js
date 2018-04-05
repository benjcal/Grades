import activities from '../sections/activities'
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

    expect(activities.get(data[4].id)).toEqual(data[4])
    expect(() => activities.add(data[4])).toThrow('activity already exists')
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

it('can list activities by course', () => {
    expect(activities.byCourse(data[1].course_id)[0].name).toEqual('quiz 2')
})

it('can grade activity', () => {
    activities.get(data[1].id).grade(1, 100)

    expect(activities.get(data[1].id).studentGrade(1)).toEqual(100)
})

it('can return average', () => {
    expect(activities.get(data[1].id).average()).toBeGreaterThan(0)
})