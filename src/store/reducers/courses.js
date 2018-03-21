import _ from 'lodash'
import { courseIdToKey } from 'libs/utils'

export default function courses(state = {}, action) {
    switch (action.type) {
        case 'ADD_COURSE':
            return _.assign(state, _.set({}, courseIdToKey(action.payload.id), action.payload))
        case 'UPDATE_COURSE':
            return _.merge(state, _.set({}, courseIdToKey(action.payload.id), action.payload))
        case 'REMOVE_COURSE':
            return _.omit(state, courseIdToKey(action.payload.id))
        default:
            return state
    }
}
