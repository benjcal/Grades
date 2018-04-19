import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import LeftMenu from 'components/misc/LeftMenu'
// import Header from 'components/misc/Header'
// import Home from 'components/views/Home'
// import CoursesList from 'components/views/Courses/CoursesList'
// import CourseDetails from 'components/Courses/CourseDetails'
import Dashboard from 'components/Dashboard/Dashboard'

// import Students from 'components/views/Students/StudentsList'
// import AddStudent from 'components/views/Students/AddStudent'

// // import Activities from 'components/views/Activities/ActivitiesList'
// import Grades from './views/Grades/GradesList'

// import CourseStudents from 'components/views/Courses/CourseStudents'
// import CourseActivities from 'components/views/Courses/CourseActivities'


// import DevTools from 'mobx-react-devtools'

import AppHeader from './global/AppHeader'
import AppLeftNav from './global/AppLeftNav'
// import Home from './Home'
import 'css/app.css'

const App = () =>    
    <div className="app">
        <AppHeader />
        <main>
            <AppLeftNav />
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                {/* <Route exact path="/course" component={CourseDetails}/> */}
            </Switch>
        </main>
    
        {/* <LeftMenu />
        <main>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                
        
                <Route path="/courses" component={CoursesList}/>
                <Route exact path="/course/:id" component={Course}/>
                <Route path="/course/:id/students" component={CourseStudents}/>
                <Route path="/course/:id/activities" component={CourseActivities}/>
                
                <Route exact path="/students" component={Students}/>
                <Route path="/students/add" component={AddStudent}/>

                <Route path="/grades" component={Grades}/>
            </Switch>
        </main>
        <DevTools /> */}
    </div>

    
export default App