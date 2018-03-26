import React, { Component } from 'react'
import Header from 'components/misc/Header'
import StudentsList from 'components/views/StudentsList'
import LeftMenu from 'components/misc/LeftMenu'

import 'styles/app.css'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <main>
                    <LeftMenu />
                    <StudentsList />
                </main>
            </div>
        )
    }
}

export default App