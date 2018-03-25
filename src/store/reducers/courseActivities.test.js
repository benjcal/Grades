import _ from 'lodash'
import fp from 'lodash/fp'
import { createStore } from 'redux'
import courseActivities from './courseActivities'

let store = createStore(courseActivities)

let activity = {
    id: 1,
    name: "Quiz 1"
}

let activity2 = {
    id: 2,
    name: "Exam 1"
}

let course = {
    id: 1,
    name: "Math"
}

it('can add an activity', () => {
    store.dispatch({
        type: 'ADD_ACTIVITY',
        payload: {
            activity,
            courseID: course.id
        }
    })

    store.dispatch({
        type: 'ADD_ACTIVITY',
        payload: {
            activity: activity2,
            courseID: course.id
        }
    })
    
    expect(store.getState()[course.id][activity.id]).toEqual(activity)
    expect(store.getState()[course.id][activity2.id]).toEqual(activity2)
})