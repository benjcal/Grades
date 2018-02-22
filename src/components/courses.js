import React, { Component } from 'react'
import AddCourse from './addCourse'
import '../styles/courses.css'

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
        return (
            <div className="courses">
            {this.state.showAdd &&
                <div className="shadow" onClick={(e) => {this.showAdd(e)}}>
                    <AddCourse />
                </div>}
                {courses.map((n,i) => {
                    return (
                        course(n)
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

export default Courses

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

let courses = 
[{
    id: 1,
    name: "Macaca fuscata",
    color: 1,
    icon: "cal"
  }, {
    id: 2,
    name: "Amblyrhynchus cristatus",
    color: 1,
    icon: "book"
  }, {
    id: 3,
    name: "Nannopterum harrisi",
    color: 7,
    icon: "flask"
  }, {
    id: 4,
    name: "Plectopterus gambensis",
    color: 2,
    icon: "globe"
  }, {
    id: 5,
    name: "Mycteria leucocephala",
    color: 6,
    icon: "computer"
  }, {
    id: 6,
    name: "Thalasseus maximus",
    color: 5,
    icon: "paint"
  }, {
    id: 7,
    name: "Capreolus capreolus",
    color: 6,
    icon: ""
  }]

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