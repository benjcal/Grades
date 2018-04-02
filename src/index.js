import React from 'react'
import ReactDOM from 'react-dom'
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
})

coursesSample.forEach(n => {
    store.addCourse(n)
})

activitiesSample.forEach(n => {
    store.addActivity(n)
})

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root'))
