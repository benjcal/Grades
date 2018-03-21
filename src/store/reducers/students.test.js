import { students } from './students'
import { createStore } from 'redux'
import { studentIdToKey } from 'libs/utils'


let store = createStore(students)


let student1 = {
    id: 1,
    fistName: 'Ben',
    lastName: 'Cal'

}

let student2 = {
    id: 2,
    fistName: 'Nikki',
    lastName: 'Weis'
}

it('can add a new student', () => {
    
    store.dispatch({
        type: 'ADD_STUDENT',
        payload: student1
    })

    expect(store.getState().student1.fistName).toEqual('Ben')
})

it('can update student', () => {

    store.dispatch({
        type: 'UPDATE_STUDENT',
        payload: {
            id: 1,
            fistName: 'Al'
        }
    })

    expect(store.getState().student1.fistName).toEqual('Al')
    expect(store.getState().student1.lastName).toEqual('Cal')
})

it('can remove student', () => {

    store.dispatch({
        type: 'REMOVE_STUDENT',
        payload: 1
    })

    expect(store.getState()).toEqual({})
})
