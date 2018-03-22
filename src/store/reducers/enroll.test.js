import _ from 'lodash'
import fp from 'lodash/fp'
import { createStore } from 'redux'
import enroll from './enroll'

import { studentIdToKey } from 'libs/utils'

let store = createStore(enroll)

let student1 = {
    id: 1,
    firstName: 'ben'
}

let student2 = {
    id: 2,
    firstName: 'Al'
}

let course = {
    id: 1,
    name: "Math"
}

let sample = {
    course1: {
        student1: {},
        student2: {},
        student3: {},
    }
}

it('can enroll student', ()=> {

    store.dispatch({
        type: 'ENROLL_STUDENT',
        payload: {
            course,
            student: student1
        }
    })

    store.dispatch({
        type: 'ENROLL_STUDENT',
        payload: {
            course,
            student: student2
        }
    })
    
    expect(store.getState().course_1.student_2).toEqual({})
})

it('can unenroll student', ()=> {

    store.dispatch({
        type: 'UNENROLL_STUDENT',
        payload: {
            course,
            student: student2
        }
    })
    
    expect(store.getState().course_1.student_2).toEqual(undefined)
})