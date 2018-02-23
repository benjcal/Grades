import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import App from './components/app'
import registerServiceWorker from './registerServiceWorker'
import { loadStudentsData, loadCoursesData, addStudent } from './store/actions'
import studentsData from './data/students.json'
import coursesData from './data/courses.json'

store.subscribe(() =>
    console.log(store.getState())
)

console.log(store.getState())

loadStudentsData(studentsData)

loadCoursesData(coursesData)

console.log(addStudent({ id: 6, name: 'hhhhhhhh' }))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
