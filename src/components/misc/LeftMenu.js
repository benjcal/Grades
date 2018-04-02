import React from 'react'
import HomeIcon from 'react-icons/lib/md/home'
import CoursesIcon from 'react-icons/lib/md/assignment-turned-in'
import StudentsIcon from 'react-icons/lib/md/people'
import SettingsIcon from 'react-icons/lib/md/settings'
import gradesLogo from 'img/grades_logo.png'

export default (props) => {
    let { callback, active } = props

    return (
        <nav className='left-menu'>
            <div className="logo">
                <img src={gradesLogo} alt=""/>
            </div>
            <div
                className={['item', active === 'home' ? 'active' : null].join(' ')}
                onClick={() => {callback('home')}}>
                <i><HomeIcon /></i>
                Home
            </div>

            <div
                className={['item', active === 'courses' ? 'active' : null].join(' ')}
                onClick={() => {callback('courses')}}>
                <i><CoursesIcon /></i>
                Courses
            </div>

            <div
                className={['item', active === 'students' ? 'active' : null].join(' ')}
                onClick={() => {callback('students')}}>
                <i><StudentsIcon /></i>
                Students
            </div>


            <div className='item'><i><SettingsIcon /></i>Settings</div>
        </nav>
    )
}
