export function ui(state = {view: 'courses'}, action) {
    switch (action.type) {
        case 'SET_VIEW':
            return { ...state, view: action.payload }
        default:
            return state
    }
}

export function students(state ={}, action) {
    switch (action.type) {
        case 'LOAD_STUDENTS':
            return Object.assign(state, action.payload)
        case 'ADD_STUDENT':
            return {...state, [`student${action.payload.id}`]: action.payload}

        default:
            return state
    }
}

export function courses(state ={}, action) {
    switch (action.type) {
        case 'LOAD_COURSES':
            return Object.assign(state, action.payload)
        default:
            return state
    }
}