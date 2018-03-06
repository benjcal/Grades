import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { Provider } from 'mobx-react'
// import DevTools from 'mobx-react-devtools'
import RootStore from 'models/RootStore'

import studentsData from 'data/students'
import coursesData from 'data/courses'

let store = RootStore.create()

studentsData.map(n => store.addStudent(n))

coursesData.map(n => store.addCourse(n))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
