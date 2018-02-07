import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import App from './components/app'
import registerServiceWorker from './registerServiceWorker'

store.subscribe(() =>
    console.log(store.getState())
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
