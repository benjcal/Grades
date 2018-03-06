import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { Provider } from 'mobx-react'
import store from './models/RootStore'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
