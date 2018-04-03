import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/md/home'
import ActivitiesIcon from 'react-icons/lib/md/library-books'
import GradesIcon from 'react-icons/lib/md/assignment-turned-in'
import CoursesIcon from 'react-icons/lib/md/class'
import StudentsIcon from 'react-icons/lib/md/people'
import SettingsIcon from 'react-icons/lib/md/settings'
import { observer } from 'mobx-react'

import store from 'store/store'

const LeftMenu = () => {
    return (
        <nav className='left-menu'>
            {/* <NavLink to="/" className="item" activeClassName="active">
                <i><HomeIcon /></i>
            </NavLink> */}

            <NavLink to="/courses" className="item" activeClassName='active'>
                <i><CoursesIcon /></i>
            </NavLink>

            <NavLink to="/students" className="item" activeClassName="active">
                <i><StudentsIcon /></i>
            </NavLink>

            <div
                className={['item', store.currentView === 'activities' ? 'active' : null].join(' ')}
                onClick={() => {store.setView('activities')}}>
                <i><ActivitiesIcon /></i>
            </div>

            <div
                className={['item', store.currentView === 'grades' ? 'active' : null].join(' ')}
                onClick={() => {store.setView('grades')}}>
                <i><GradesIcon /></i>
            </div>

            <div
                className={['item', store.currentView === 'settings' ? 'active' : null].join(' ')}
                onClick={() => {store.setView('settings')}}>
                <i><SettingsIcon /></i>
            </div>
        </nav>
    )
}

export default observer(LeftMenu)