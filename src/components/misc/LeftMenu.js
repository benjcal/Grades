import React from 'react'
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
            <div
                className={['item', store.currentView === 'home' ? 'active' : null].join(' ')}
                onClick={() => {store.setView('home')}}>
                <i><HomeIcon /></i>
            </div>

            <div
                className={['item', store.currentView === 'courses' ? 'active' : null].join(' ')}
                onClick={() => {store.setView('courses')}}>
                <i><CoursesIcon /></i>
            </div>

            <div
                className={['item', store.currentView === 'students' ? 'active' : null].join(' ')}
                onClick={() => {store.setView('students')}}>
                <i><StudentsIcon /></i>
            </div>

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