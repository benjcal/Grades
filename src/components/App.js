import React, { Component } from 'react'
import Header from 'components/misc/Header'
import Students from 'components/views/Students/StudentsList'
import Courses from 'components/views/Courses/CoursesList'
import Activities from 'components/views/Activities/ActivitiesList'
import Grades from './views/Courses/CoursesList'
import LeftMenu from 'components/misc/LeftMenu'

import DevTools from 'mobx-react-devtools'
import 'styles/app.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            view: 'home',
        }

        this.setView = this.setView.bind(this)

    }

    setView(view) {
        this.setState({view})
    }

    render() {
        return (
            <div className="app">
                <LeftMenu callback={this.setView} active={this.state.view}/>
                <main>
                    <Header />
                    {this.state.view === 'home' && <Courses />}
                    {this.state.view === 'courses' && <Courses />}
                    {this.state.view === 'students' && <Students />}
                    {this.state.view === 'activities' && <Activities />}
                    {this.state.view === 'grades' && <Grades />}
                </main>
                <DevTools />
            </div>
        )
    }
}
    
export default App