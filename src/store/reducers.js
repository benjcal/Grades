export function ui(state = {view: 'courses'}, action) {
    switch (action.type) {
        case 'SET_VIEW':
            return { ...state, view: action.payload }
        default:
            return state
    }
}