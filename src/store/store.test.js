// import store from './store'

// let student = {
//     id: 'u32',
//     name: 'ben'
// }

// let course = {
//     id: 'mt101',
//     name: 'Math'
// }

// it('can add, update & remove a student', () => {
//     store.dispatch({
//         type: 'ADD_STUDENT',
//         payload: student
//     })

//     expect(store.getState().students[student.id]).toEqual(student)

//     store.dispatch({
//         type: 'UPDATE_STUDENT',
//         payload: {
//             id: 'u32',
//             name: 'fran'
//         }
//     })

//     expect(store.getState().students[student.id].name).toEqual('fran')

//     store.dispatch({
//         type: 'REMOVE_STUDENT',
//         payload: student
//     })

//     expect(store.getState().students).toEqual({})
// })


// it('can add, update & remove a course', () => {
//     store.dispatch({
//         type: 'ADD_COURSE',
//         payload: course
//     })

//     expect(store.getState().courses[course.id]).toEqual(course)

//     store.dispatch({
//         type: 'UPDATE_COURSE',
//         payload: {
//             id: 'mt101',
//             name: 'M'
//         }
//     })
    
//     expect(store.getState().courses[course.id].name).toEqual('M')

//     store.dispatch({
//         type: 'REMOVE_COURSE',
//         payload: course
//     })

//     expect(store.getState().courses).toEqual({})
// })

// // it('can enroll students', ()=> {
// //     store.dispatch({
// //         type: 'ENROLL_STUDENT',
// //         payload: {
// //             student,
// //             course
// //         }
// //     })

// //     expect(store.getState().enroll[course.id]).toEqual({student_u32: {}})
// // })
