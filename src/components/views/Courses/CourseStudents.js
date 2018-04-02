import React, { Component } from 'react'
import store from 'store/store'
import { observer } from 'mobx-react'

const CourseStudents = (props) => {
    return (
        <div className="course-students">
            <div className="head">
                <span className="id">ID</span>
                <span className="name">NAME</span>
            </div>
            {store.enrolledStudents(store.currentCourse).map(n => 
                <CourseStudentRow student={n} key={n.id}/>
            )}
        </div>
    )
}

export default observer(CourseStudents)

class CourseStudentRow extends Component {
    render() {
        let {student} = this.props
        return (
            <div className="student">
                <div className="id">{student.id}</div>
                <div className="name">{student.first} {student.last}</div>
            </div>
        )
    }
}