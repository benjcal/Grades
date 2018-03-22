import { createStore } from 'redux'
import activities from './activities'

let store = createStore(activities)

let activity = {
    id: 1,
    name: 'Quiz 1',
    points: 100
}

it('can add an activity', () => {
    
    store.dispatch({
        type: 'ADD_ACTIVITY',
        payload: activity
    })

    expect(store.getState().activity_1.points).toEqual(100)
})

it('can update an activity', () => {
    
    store.dispatch({
        type: 'UPDATE_ACTIVITY',
        payload: {
            id: 1,
            points: 80
        }
    })

    expect(store.getState().activity_1.points).toEqual(80)
})

it('can remove an activity', () => {
    
    store.dispatch({
        type: 'REMOVE_ACTIVITY',
        payload: activity
    })

    expect(store.getState()).toEqual({})
})