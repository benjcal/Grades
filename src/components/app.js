import React, { Component } from 'react'
import '../css/app.css'

import Courses from './courses'
import SideMenu from './sideMenu'
import Header from './header'
import Grades from './grades'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <main>
                    <SideMenu />
                    <div className="content">
                        <Courses />
                        <Grades />
                    </div>
                </main>
            </div>
        )
    }
}

export default App
