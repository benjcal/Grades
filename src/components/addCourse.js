import React, { Component } from 'react'
import Select from './select'
import '../styles/addCourse.css'

import FaCalculator from 'react-icons/lib/fa/calculator'
import FaFlask from 'react-icons/lib/fa/flask'
import FaDesktop from 'react-icons/lib/fa/desktop'
import FaPainBrush from 'react-icons/lib/fa/paint-brush'
import FaGlobe from 'react-icons/lib/fa/globe'
import FaBook from 'react-icons/lib/fa/book'
import FaPlus from 'react-icons/lib/fa/plus'

let icons = [FaCalculator(), FaFlask(), FaDesktop(), FaPainBrush()]

let subjects = ["Math", "Science", "History", "Custom"]
let grades = ["K","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","11th","12th"]

export default class AddCourse extends Component {
    fn(e) {
        console.log(e)
    }
    render() {
        return (
            <div className="add-course">
            <Select options={grades} name="Grade" fn={(e => {this.fn(e)})}/>
            <Select options={subjects} name="Subject"/>
            <Select options={icons} name="Icon"/>
                <div className="subject">
                    <label>Subject</label>
                    <input type="text" placeholder="i.e. Math"/>
                </div>
                <div className="name">
                    <label>Course name</label>
                    <input type="text" placeholder="i.e Pre-Algebra"/>
                </div>
                <div className="color">
                    <label>Color</label>
                    <select>
                        <option value="color1"></option>
                        <option value="color2"></option>
                        <option value="color3"></option>
                        <option value="color4"></option>
                        <option value="color5"></option>
                        <option value="color6"></option>
                    </select>
                </div>
                <div className="icon">
                    <label>Icon</label>
                    <select>
                        <option value="color1"></option>
                        <option value="color2"></option>
                    </select>
                </div>


            </div>
        )
    }
}
