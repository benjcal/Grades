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
    store.addStudent(n)
    if (n.id < 7) {
        store.enrollStudent(1, n.id)
    }
})

coursesSample.forEach(n => {
    store.addCourse(n)
})

activitiesSample.forEach(n => {
    store.addActivity(n)
})



ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'))
