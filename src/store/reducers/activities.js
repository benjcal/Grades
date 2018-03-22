import assign from 'lodash.assign'
import set from 'lodash.set'
import merge from 'lodash.merge'
import omit from 'lodash.omit'

import { activityIdToKey } from 'libs/utils'

export default function activities(state = {}, action) {
    switch (action.type) {
        case 'ADD_ACTIVITY':
            return assign(state, set({}, activityIdToKey(action.payload.id), action.payload))
        case 'UPDATE_ACTIVITY':
            return merge(state, set({}, activityIdToKey(action.payload.id), action.payload))
        case 'REMOVE_ACTIVITY':
            return omit(state, activityIdToKey(action.payload.id))
        default:
            return state
    }
}
