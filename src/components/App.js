import React from 'react'
import Header from 'components/misc/Header'
import StudentsList from 'components/views/StudentsList'
import CoursesList from 'components/views/CoursesList/CoursesList'
import ActivitiesList from 'components/views/ActivitiesList'
import LeftMenu from 'components/misc/LeftMenu'

import DevTools from 'mobx-react-devtools'
import 'styles/app.css'

export default (props) => 
    <div className="app">
        <DevTools />
        <Header />
        <main>
            <LeftMenu />
            {/* <CoursesList /> */}
            {/* <StudentsList /> */}
            <ActivitiesList />

        </main>
    </div>
