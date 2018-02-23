import store from '.'
import { toById } from '../libs/lib'

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
        return new Error('student already exists')
    } else {
        store.dispatch({
            type: 'ADD_STUDENT',
            payload: student
        })
    }
}

export function deleteStudent(id) {
    if (!store.getState().students[`student${id}`]) {
        return new Error('no student found')
    } else {
        store.dispatch({
            type: 'DELETE_STUDENT',
            payload: id
        })
    }
}

export function updateStudent(student) {
    if (!store.getState().students[`student${student.id}`]) {
        return new Error('no student found')
    } else {
        store.dispatch({
            type: 'UPDATE_STUDENT',
            payload: student
        })
    }
}