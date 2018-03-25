import assign from 'lodash.assign'
import set from 'lodash.set'
import merge from 'lodash.merge'
import omit from 'lodash.omit'

export default function courses(state = {}, action) {
    switch (action.type) {
        case 'ADD_COURSE':
            return assign({}, state, set({}, action.payload.id, action.payload))
        case 'UPDATE_COURSE':
            return merge({}, state, set({}, action.payload.id, action.payload))
        case 'REMOVE_COURSE':
            return omit(state, action.payload.id)
        default:
            return state
    }
}
