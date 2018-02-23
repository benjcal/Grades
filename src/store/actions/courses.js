import store from '../'
import { toById } from '../../libs/lib'

export function loadCoursesData(coursesData) {
    store.dispatch({
        type: 'LOAD_COURSES',
        payload: toById('course', coursesData)
    })
}

export function addCourse(course) {
    if (store.getState().courses[course.id]) {
        return new Error('course already exists')
    } else {
        store.dispatch({
            type: 'ADD_COURSE',
            payload: course
        })
    }
}

export function updateCourse(course) {
    if (!store.getState().courses[course.id]) {
        return new Error('no course found')
    } else {
        store.dispatch({
            type: 'ADD_COURSE',
            payload: course
        })
    }
}

export function deleteCourse(id) {
    if (!store.getState().courses[id]) {
        return new Error('no course found')
    } else {
        store.dispatch({
            type: 'DELETE_COURSE',
            payload: id
        })
    }
}
