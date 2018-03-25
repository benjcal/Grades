import set from 'lodash.set'
import merge from 'lodash.merge'
import omit from 'lodash.omit'

export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ACTIVITY':
            let {courseID, activity} = action.payload
            return merge({}, state, set({}, courseID,
                set({}, activity.id, activity)
            )
        )

        case 'REMOVE_ACTIVITY':
            return omit(state, `${courseID}.${activity.id}`)
        default:
            return state
    }
}
