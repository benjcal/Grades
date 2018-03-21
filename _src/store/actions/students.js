import store from '../'
import { toById } from '../../libs/lib'

export function loadStudentsData(studentsData) {
    store.dispatch({
        type: 'LOAD_STUDENTS',
        payload: toById('student', studentsData)
    })
}

export function addStudent(student) {
    if (store.getState().students[student.id]) {
        return new Error('student already exists')
    } else {
        store.dispatch({
            type: 'ADD_STUDENT',
            payload: student
        })
    }
}

export function updateStudent(student) {
    if (!store.getState().students[student.id]) {
        return new Error('no student found')
    } else {
        store.dispatch({
            type: 'ADD_STUDENT',
            payload: student
        })
    }
}

export function deleteStudent(id) {
    if (!store.getState().students[id]) {
        return new Error('no student found')
    } else {
        store.dispatch({
            type: 'DELETE_STUDENT',
            payload: id
        })
    }
}
