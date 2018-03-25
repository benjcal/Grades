import _ from 'lodash'
import fp from 'lodash/fp'
import { createStore } from 'redux'
import courseStudents from './courseStudents'

import { studentIdToKey } from 'libs/utils'

let store = createStore(courseStudents)

let student1 = {
    id: '1hgf',
    firstName: 'ben'
}

let student2 = {
    id: 'uuu',
    firstName: 'Al'
}

let course = {
    id: 'c1',
    name: "Math"
}

it('can enroll student', ()=> {

    store.dispatch({
        type: 'ENROLL_STUDENT',
        payload: {
            courseID: course.id,
            studentID: student1.id
        }
    })

    store.dispatch({
        type: 'ENROLL_STUDENT',
        payload: {
            courseID: course.id,
            studentID: student2.id
        }
    })
    
    expect(store.getState()[course.id][student1.id]).toEqual({})
    expect(store.getState()[course.id][student2.id]).toEqual({})
})

it('can unenroll student', ()=> {

    store.dispatch({
        type: 'UNENROLL_STUDENT',
        payload: {
            courseID:  course.id,
            studentID: student2.id
        }
    })
    
    console.log(store.getState())
    expect(store.getState()[course.id][student1.id]).toEqual({})
    expect(store.getState()[course.id][student2.id]).toEqual(undefined)
})