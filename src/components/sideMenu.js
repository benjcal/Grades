import React, { Component } from 'react'
import '../styles/sideMenu.css'

import FaHome from 'react-icons/lib/fa/home'
import FaBook from 'react-icons/lib/fa/book'
import FaCheck from 'react-icons/lib/fa/check-circle-o'
import FaGroup from 'react-icons/lib/fa/group'
import FaCogs from 'react-icons/lib/fa/cogs'

import { setView } from '../store/actions'

class SideMenu extends Component {
    render() {
        return (
            <aside>
                <ul>
                    <li onClick={() => {setView('home')}}><FaHome />Home</li>
                    <li onClick={() => {setView('courses')}}><FaBook />Courses</li>
                    <li onClick={() => {setView('grades')}}><FaCheck /> Assignments</li>
                    <li onClick={() => {setView('students')}}><FaGroup />Students</li>
                    <li onClick={() => {alert('Settings')}}><FaCogs />Settings</li>
                </ul>
            </aside>
        )
    }
}

export default SideMenu
