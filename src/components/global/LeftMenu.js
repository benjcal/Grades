import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/md/home'
import ActivitiesIcon from 'react-icons/lib/md/library-books'
import GradesIcon from 'react-icons/lib/md/assignment-turned-in'
import CoursesIcon from 'react-icons/lib/md/class'
import StudentsIcon from 'react-icons/lib/md/people'
import SettingsIcon from 'react-icons/lib/md/settings'

const LeftMenu = () => {
    return (
        <nav className='left-menu'>
            <NavLink exact to="/" className="item" activeClassName="active">
                <i><HomeIcon /></i>
            </NavLink>

            <NavLink to="/courses" className="item" activeClassName='active'>
                <i><CoursesIcon /></i>
            </NavLink>

            <NavLink to="/students" className="item" activeClassName="active">
                <i><StudentsIcon /></i>
            </NavLink>

            <NavLink to="/activities" className="item" activeClassName="active">
                <i><ActivitiesIcon /></i>
            </NavLink>

            <NavLink to="/grades" className="item" activeClassName="active">
                <i><GradesIcon /></i>
            </NavLink>

            <NavLink to="/settings" className="item" activeClassName="active">
                <i><SettingsIcon /></i>
            </NavLink>
        </nav>
    )
}

export default LeftMenu