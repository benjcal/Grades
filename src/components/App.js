import React from 'react'
import Header from 'components/misc/Header'
import Students from 'components/views/Students/StudentsList'
import Courses from 'components/views/Courses/CoursesList'
// import Activities from 'components/views/Activities/ActivitiesList'
import Grades from './views/Grades/GradesList'
import LeftMenu from 'components/misc/LeftMenu'
import CoursesSubMenu from 'components/misc/CoursesSubMenu'
import CourseStudents from 'components/views/Courses/CourseStudents'
import CourseActivities from 'components/views/Courses/CourseActivities'
import store from 'store/store'
import { observer } from 'mobx-react'

import DevTools from 'mobx-react-devtools'
import 'styles/app.css'

const App = () =>    
    <div className="app">
        <LeftMenu />
        {store.currentView === 'course' + store.currentCourse && <CoursesSubMenu />}
        {store.currentView === 'course' + store.currentCourse + 'activity' && <CoursesSubMenu />}
        <main>
            <Header />
            {store.currentView === 'home' && null}
            {store.currentView === 'courses' && <Courses />}
            {store.currentView === 'students' && <Students />}
            {/* {store.currentView === 'activity' && <Activities />} */}
            {store.currentView === 'grades' && <Grades />}
            {store.currentView === 'course' + store.currentCourse && <CourseStudents />}
            {store.currentView === 'course' + store.currentCourse + 'activity' && <CourseActivities />}
        </main>
        <DevTools />
    </div>

    
export default observer(App)