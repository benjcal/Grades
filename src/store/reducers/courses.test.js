import courses from './courses'
import { createStore } from 'redux'
import { studentIdToKey } from 'libs/utils'


let store = createStore(courses)


let course1 = {
    id: 1,
    name: 'Math 8th',
    grade: 9

}

it('can add a new course', () => {
    
    store.dispatch({
        type: 'ADD_COURSE',
        payload: course1
    })

    expect(store.getState().course_1.name).toEqual(course1.name)
})

it('can update course', () => {

    store.dispatch({
        type: 'UPDATE_COURSE',
        payload: {
            id: 1,
            name: 'Science 7th'
        }
    })

    expect(store.getState().course_1.name).toEqual('Science 7th')
    expect(store.getState().course_1.grade).toEqual(course1.grade)
})

it('can remove course', () => {

    store.dispatch({
        type: 'REMOVE_COURSE',
        payload: {
            id: 1
        }
    })

    expect(store.getState()).toEqual({})
})

