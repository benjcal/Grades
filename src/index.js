import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import 'styles/index.css'
import { Provider } from 'mobx-react'
import store from 'store/store'
import studentsSample from 'store/data/studentsSample.json'

window.$store = store

studentsSample.forEach(n => {
    store.addStudent(n)
})

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root'))
