import _ from 'lodash'
import { activityIdToKey } from 'libs/utils'

export default function activities(state = {}, action) {
    switch (action.type) {
        case 'ADD_ACTIVITY':
            return _.assign({}, state, _.set({}, activityIdToKey(action.payload.id), action.payload))
        case 'UPDATE_ACTIVITY':
            return _.merge({}, state, _.set({}, activityIdToKey(action.payload.id), action.payload))
        case 'REMOVE_ACTIVITY':
            return _.omit(state, activityIdToKey(action.payload.id))
        default:
            return state
    }
}
