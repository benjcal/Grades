import React, { Component } from 'react'
import '../styles/courses.css'

import FaCalculator from 'react-icons/lib/fa/calculator'
import FaFlask from 'react-icons/lib/fa/flask'
import FaDesktop from 'react-icons/lib/fa/desktop'
import FaPainBrush from 'react-icons/lib/fa/paint-brush'
import FaGlobe from 'react-icons/lib/fa/globe'
import FaBook from 'react-icons/lib/fa/book'

class Courses extends Component {
    render() {
        return (
            <div className="courses">
                {course("Math", "color1", FaCalculator)}
                {course("Science", "color2", FaFlask)}
                {course("Computer", "color3", FaDesktop)}
                {course("Arts", "color4", FaPainBrush)}
                {course("Geology", "color5", FaGlobe)}
                {course("History", "color6", FaBook)}
            </div>
        )
    }
}

export default Courses

function course(name, color, Icon) {
    return (
        <div className={["course", color].join(' ')}>
            <div>
                <div><Icon /></div>
                <div>{name}</div>
            </div>            
        </div>
    )
}