import React, { Component } from 'react'
import Header from 'components/misc/Header'
import StudentsList from 'components/views/StudentsList'
import LeftMenu from 'components/misc/LeftMenu'
import studentsSample from 'store/data/studentsSample.json'
import store from 'store/store'
import DevTools from 'mobx-react-devtools'

import 'styles/app.css'

class App extends Component {
    componentWillMount() {
        
        studentsSample.forEach(n => {
            store.addStudent(n)
        })
    }

    render() {
        return (
            <div className="app">
                <DevTools />
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