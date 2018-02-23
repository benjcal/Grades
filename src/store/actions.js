import store from '.'
import { toById } from '../lib'

export function setView(view) {
    store.dispatch({
        type: 'SET_VIEW',
        payload: view
    })
}

export function loadStudentsData(studentsData) {
    store.dispatch({
        type: 'LOAD_STUDENTS',
        payload: toById('student', studentsData)
    })
}

export function loadCoursesData(coursesData) {
    store.dispatch({
        type: 'LOAD_COURSES',
        payload: toById('course', coursesData)
    })
}

export function addStudent(student) {
    if (store.getState().students[`student${student.id}`]) {
        return new Error('error')
    } else {
        store.dispatch({
            type: 'ADD_STUDENT',
            payload: student
        })
    }
}