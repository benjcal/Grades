import React, { Component } from 'react'
import '../css/sideMenu.css'

import FaHome from 'react-icons/lib/fa/home'
import FaBook from 'react-icons/lib/fa/book'
import FaCheck from 'react-icons/lib/fa/check-circle-o'
import FaGroup from 'react-icons/lib/fa/group'
import FaCogs from 'react-icons/lib/fa/cogs'

import {sample} from '../store/actions'

class SideMenu extends Component {
    render() {
        return (
            <aside>
                <ul>
                    <li onClick={() => {sample('home')}}><FaHome />Home</li>
                    <li onClick={() => {sample('courses')}}><FaBook />Courses</li>
                    <li onClick={() => {sample('grades')}}><FaCheck /> Assignments</li>
                    <li onClick={() => {alert('Students')}}><FaGroup />Students</li>
                    <li onClick={() => {alert('Settings')}}><FaCogs />Settings</li>
                </ul>
            </aside>
        )
    }
}

export default SideMenu
