import _ from 'lodash'
import { studentIdToKey } from 'libs/utils'

export function students(state = {}, action) {
    switch (action.type) {
        case 'ADD_STUDENT':
            return _.assign(state, _.set({}, studentIdToKey(action.payload.id), action.payload))
        case 'UPDATE_STUDENT':
            return _.merge(state, _.set({}, studentIdToKey(action.payload.id), action.payload))
        case 'REMOVE_STUDENT':
            return _.omit(state, studentIdToKey(action.payload))
        default:
            return state
    }
}
