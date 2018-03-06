import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import App from './components/app'
import registerServiceWorker from './registerServiceWorker'
import { loadStudentsData, addStudent, updateStudent, deleteStudent } from './store/actions/students'
import { loadCoursesData } from './store/actions/courses'
import studentsData from './data/students.json'
import coursesData from './data/courses.json'

store.subscribe(() =>
    console.log("Store Update: ", store.getState())
)

loadStudentsData(studentsData)

loadCoursesData(coursesData)

updateStudent({ id: 6, name: 'hhhhhhhh' })

addStudent({ id: 60, name: 'hhhhhhhh' })

deleteStudent(6)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
