import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/md/home'
import ActivitiesIcon from 'react-icons/lib/md/library-books'
import GradesIcon from 'react-icons/lib/md/assignment-turned-in'
import CoursesIcon from 'react-icons/lib/md/class'
import StudentsIcon from 'react-icons/lib/md/people'
import SettingsIcon from 'react-icons/lib/md/settings'
import 'css/app-left-nav.css'

const AppLeftNav = () => {
    return (
        <div className="app-left-nav">
            <NavLink exact to="/" className="home" activeClassName="active">
                <HomeIcon />
            </NavLink>

            <NavLink to="/courses" className="courses" activeClassName='active'>
                <CoursesIcon />
            </NavLink>

            <NavLink to="/students" className="students" activeClassName="active">
                <StudentsIcon />
            </NavLink>

            <NavLink to="/activities" className="activities" activeClassName="active">
                <ActivitiesIcon />
            </NavLink>

            <NavLink to="/grades" className="grades" activeClassName="active">
                <GradesIcon />
            </NavLink>

            <NavLink to="/settings" className="settings" activeClassName="active">
                <SettingsIcon />
            </NavLink>
        </div>
    )
}

export default AppLeftNav