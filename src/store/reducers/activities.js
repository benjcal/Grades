import assign from 'lodash.assign'
import set from 'lodash.set'
import merge from 'lodash.merge'
import omit from 'lodash.omit'

export default function activities(state = {}, action) {
    switch (action.type) {
        case 'ADD_ACTIVITY':
            return assign(state, set({}, action.payload.id, action.payload))
        case 'UPDATE_ACTIVITY':
            return merge(state, set({}, action.payload.id, action.payload))
        case 'REMOVE_ACTIVITY':
            return omit(state, action.payload.id)
        default:
            return state
    }
}
