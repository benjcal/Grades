import React, { Component } from 'react'

import 'styles/app.css'

import SideMenu from 'components/sideMenu'
import Header from 'components/header'
import Home from 'components/views/home'
import Courses from 'components/views/courses'
import Grades from 'components/views/grades'
import Students from 'components/views/students'

class App extends Component {
    render() {
        let view = 'students'

        return (
            <div className="app">
                <Header />
                <main>
                    <SideMenu />
                    <div className="content">
                        {switchView(view)}
                    </div>
                </main>
            </div>
        )
    }
}

function switchView(view) {
    switch (view) {
        case 'home':
            return <Home />
        case 'grades': 
            return <Grades />
        case 'students':
            return <Students />
        default:
            return <Courses />
    }
}

export default App


