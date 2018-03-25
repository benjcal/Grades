import set from 'lodash.set'
import merge from 'lodash.merge'
import omit from 'lodash.omit'


export default (state = {}, action) => {
    switch (action.type) {
        case 'ENROLL_STUDENT':
            return merge({}, state, set({},
                action.payload.courseID,
                idToObj(action.payload.studentID)
            )
        )

        case 'UNENROLL_STUDENT':
        console.log(action)
            return omit(state, `${action.payload.courseID}.${action.payload.studentID}`)
        default:
            return state
    }
}

function idToObj(id) {
    return set({}, id, {})
}
