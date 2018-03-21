import React, { Component } from 'react'
import Header from 'components/misc/Header'
import StudentsList from 'components/views/StudentsList'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <h3>App</h3>
                <StudentsList />
            </div>
        )
    }
}

export default App