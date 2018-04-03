import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from 'components/misc/Header'
import Students from 'components/views/Students/StudentsList'
import Courses from 'components/views/Courses/CoursesList'
// import Activities from 'components/views/Activities/ActivitiesList'
import Grades from './views/Grades/GradesList'
import LeftMenu from 'components/misc/LeftMenu'
import CourseStudents from 'components/views/Courses/CourseStudents'
import CourseActivities from 'components/views/Courses/CourseActivities'


import DevTools from 'mobx-react-devtools'
import 'styles/app.css'

const App = () =>    
    <div className="app">
        <LeftMenu />
        <main>
            <Header />
            <Switch>
                <Route exact path="/" component={Courses}/>
                
                <Route path="/courses" component={Courses}/>
                <Route exact path="/course/:id" component={CourseStudents}/>
                <Route path="/course/:id/students" component={CourseStudents}/>
                <Route path="/course/:id/activities" component={CourseActivities}/>
                
                <Route path="/students" component={Students}/>
                <Route path="/grades" component={Grades}/>
            </Switch>
        </main>
        <DevTools />
    </div>

    
export default App