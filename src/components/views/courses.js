import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddCourse from 'components/addCourse'
import 'styles/courses.css'

import Calculator from 'react-icons/lib/fa/calculator'
import Flask from 'react-icons/lib/fa/flask'
import Desktop from 'react-icons/lib/fa/desktop'
import PaintBrush from 'react-icons/lib/fa/paint-brush'
import Globe from 'react-icons/lib/fa/globe'
import Book from 'react-icons/lib/fa/book'
import Plus from 'react-icons/lib/fa/plus'

class Courses extends Component {
    state = {
        showAdd: false
    }
    showAdd(e) {
        if (e.currentTarget === e.target) {
            this.setState({showAdd: false})
        }
    }
    render() {
        let { courses } = this.props
        return (
            <div className="courses">
            {this.state.showAdd &&
                <div className="shadow" onClick={(e) => {this.showAdd(e)}}>
                    <AddCourse />
                </div>}
                {Object.keys(courses).map((n) => {
                    return (
                        course(courses[n])
                    )
                })}
                
                <div className="course color7" onClick={() => {this.setState({showAdd: true})}}>
                    <div>
                        <div><Plus /></div>
                        <div>Add Course</div>
                    </div>            
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { courses: state.courses }
}
export default connect(mapStateToProps, null)(Courses)

function course(course) {
    return (
        <div key={course.id} className={["course", `color${course.color}`].join(' ')}>
            <div>
                <div>{icon(course.icon)}</div>
                <div>{course.name}</div>
            </div>            
        </div>
    )
}

function icon(name) {
    switch (name) {
        case 'cal':
            return <Calculator />
        case 'flask':
            return <Flask />
        case 'computer':
            return <Desktop />
        case 'paint':
            return <PaintBrush />
        case 'globe':
            return <Globe />
        case 'book':
            return <Book />
    
        default:
            return <Plus />
    }
}