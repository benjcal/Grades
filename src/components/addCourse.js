import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Select from './select'
import '../styles/addCourse.css'

import FaCalculator from 'react-icons/lib/fa/calculator'
import FaFlask from 'react-icons/lib/fa/flask'
import FaDesktop from 'react-icons/lib/fa/desktop'
import FaPainBrush from 'react-icons/lib/fa/paint-brush'
import FaGlobe from 'react-icons/lib/fa/globe'
import FaBook from 'react-icons/lib/fa/book'

let icons = [FaCalculator(), FaFlask(), FaDesktop(), FaPainBrush(), FaGlobe(), FaGlobe(), FaBook()]
let grades = ["K","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","11th","12th"]

class AddCourse extends Component {
    fn(e) {
        console.log(e)
    }
    
    render() {
        return (
            <div className="add-course">
                <h1>Add Course</h1>
                <div className="grid">
                    <div className="subject">
                            <label>Subject</label>
                            <input type="text" placeholder="i.e. Math"/>
                        </div>
                        <div className="name">
                            <label>Course name</label>
                            <input type="text" placeholder="i.e Pre-Algebra"/>
                    </div>
                    <Select options={grades} name="Grade" fn={(e => {this.fn(e)})}/>
                    <Select options={icons} name="Icon" fn={(e => {this.fn(e)})}/>
                </div>
            </div>
        )
    }
}

export default inject('store')(observer(AddCourse))