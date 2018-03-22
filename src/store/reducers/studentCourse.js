import _ from 'lodash'
import { courseIdToKey } from 'libs/utils'
import { studentIdToKey } from 'libs/utils'

export default function courseEnroll(state = {}, action) {
    switch (action.type) {
        case 'ENROLL_STUDENT':
            return _.merge({}, state, _.set({}, courseIdToKey(action.payload.course.id), studentIdToObj(action.payload.student.id)))
        case 'UNENROLL_STUDENT':
            return _.omit(state, `${courseIdToKey(action.payload.course.id)}.${studentIdToKey(action.payload.student.id)}`)
        default:
            return state
    }
}

function studentIdToObj(id) {
    return _.set({}, studentIdToKey(id), {})
}
