import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../styles/app.css'


import SideMenu from './sideMenu'
import Header from './header'
import Home from './home'
import Courses from './courses'
import Grades from './grades'
import Students from './students'

class App extends Component {
    render() {
        let { view } = this.props

        return (
            <div className="app">
                <Header />
                <main>
                    {/* <SideMenu /> */}
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

function mapStateToProps(state) {
    return { view: state.ui.view }
}
export default connect(mapStateToProps, null)(App)


