import courses from '../sections/courses'
import data from '../sample_data/courses.json'

it('can add courses', () => {
    courses.add(data[0])
    courses.add(data[1])
    courses.add(data[2])
    courses.add(data[3])
    courses.add(data[4])

    expect(courses.get(data[0].id)).toEqual(data[0])

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