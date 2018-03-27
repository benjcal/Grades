import React from 'react'
import Header from 'components/misc/Header'
import StudentsList from 'components/views/StudentsList'
import Sample from 'components/views/Sample'
import LeftMenu from 'components/misc/LeftMenu'

import DevTools from 'mobx-react-devtools'
import 'styles/app.css'

export default (props) => 
    <div className="app">
        <DevTools />
        <Header />
        <main>
            <LeftMenu />
            {/* <Sample hello="hello"/> */}
            <StudentsList />
        </main>
    </div>
