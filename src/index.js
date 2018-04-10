import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from 'components/App'
import store from 'store/store'
import studentsData from 'store/sample_data/students.json'
import coursesData from 'store/sample_data/courses.json'
import activitiesData from 'store/sample_data/activities.json'
import 'css/index.css'

window.$store = store

studentsData.forEach(n => {
    store.students.add(n)
})

coursesData.forEach(n => {
    store.courses.add(n)
})

activitiesData.forEach(n => {
    store.activities.add(n)
})

studentsData.forEach(n => {
    store.courses.values().forEach(e => n.enroll(e.id))
})

studentsData.forEach(n => {
    store.activities.values().forEach(e => e.grade(n.id, Math.floor(Math.random() * 100)))
})

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'))
