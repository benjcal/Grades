import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from 'components/App'
import 'styles/index.css'
import { Provider } from 'mobx-react'
import store from 'store/store'
import studentsSample from 'store/data/studentsSample.json'
import coursesSample from 'store/data/coursesSample.json'
import activitiesSample from 'store/data/activitiesSample.json'

window.$store = store

studentsSample.forEach(n => {
    store.students.add(n)
})

coursesSample.forEach(n => {
    store.courses.add(n)
})

activitiesSample.forEach(n => {
    store.activities.add(n)
})

studentsSample.forEach(n => {
    store.courses.values().forEach(e => n.enroll(e.id))
})

studentsSample.forEach(n => {
    store.activities.values().forEach(e => e.grade(n.id, Math.floor(Math.random() * 100)))
})







ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'))
